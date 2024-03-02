FROM node:20.11.1-bullseye as node_app
WORKDIR /usr/src/app

RUN apt update && apt upgrade -y
RUN apt install -y chromium

ARG port=3000

COPY package*.json ./
RUN npm ci
COPY . .


ENV PORT=$port
EXPOSE $port
CMD ["node", "index.js"]



