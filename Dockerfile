FROM node:22

WORKDIR /usr/app/webclient

COPY . .

RUN npm ci

RUN npm run build

RUN npm install -g angular-http-server

WORKDIR /usr/app/webclient/dist/web-client

ENTRYPOINT [ "angular-http-server", "-p", "4200"]
