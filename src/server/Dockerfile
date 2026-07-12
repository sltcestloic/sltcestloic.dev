FROM node:22 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci --loglevel=error --no-audit --no-fund --update-notifier=false

COPY src/server ./src/server
RUN npm run server:build

FROM node:22 AS runtime

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci --omit=dev --loglevel=error --no-audit --no-fund --update-notifier=false

COPY --from=build /usr/app/src/server/dist ./src/server/dist

EXPOSE 3000

CMD ["node", "src/server/dist/main.js"]
