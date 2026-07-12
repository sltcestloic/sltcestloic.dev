FROM node:22

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci --loglevel=error --no-audit --no-fund --update-notifier=false

COPY src/client ./src/client

RUN npm run client:build

RUN npm install -g angular-http-server --loglevel=error --no-audit --no-fund --update-notifier=false

WORKDIR /usr/app/src/client/dist/client/browser

ENTRYPOINT [ "angular-http-server", "-p", "4200"]
