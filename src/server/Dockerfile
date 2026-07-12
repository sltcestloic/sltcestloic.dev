FROM node:22 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY src/server ./src/server
RUN npm run server:build

FROM node:22 AS runtime

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /usr/app/src/server/dist ./src/server/dist

EXPOSE 3000

CMD ["node", "src/server/dist/main.js"]
