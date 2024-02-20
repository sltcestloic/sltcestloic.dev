FROM node:20

WORKDIR /usr/app/webclient

COPY src src/

COPY *.json .

RUN npm install

RUN npm install -g @angular/cli

ENTRYPOINT [ "ng", "serve" , "--host=0.0.0.0" ]