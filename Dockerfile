FROM node:20

WORKDIR /usr/app/webclient

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g angular-http-server

WORKDIR /usr/app/webclient/dist/web-client/browser

ENTRYPOINT [ "angular-http-server", "-p", "4200"]