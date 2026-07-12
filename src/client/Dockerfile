FROM node:22

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY src/client ./src/client

RUN npm run client:build

RUN npm install -g angular-http-server

WORKDIR /usr/app/src/client/dist/client

ENTRYPOINT [ "angular-http-server", "-p", "4200"]
