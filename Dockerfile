FROM node:20.11.1-alpine3.19 as node_app

RUN apt-get install -y chromium-browser

WORKDIR /usr/src/app

ARG port=3000

COPY package*.json ./
RUN npm ci
COPY . .

ENV PORT=$port
EXPOSE $port
CMD ["node", "index.js"]



