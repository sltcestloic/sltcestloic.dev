FROM node:22

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY src/server ./src/server
RUN npm run server:build

EXPOSE 3000

CMD ["node", "src/server/dist/main.js"]
