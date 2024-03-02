FROM node:20.11.1-alpine3.19 as node_app

WORKDIR /usr/src/app

ARG port=3000

COPY package*.json ./
RUN npm ci
COPY . .

ENV PORT=port
EXPOSE 3000
CMD ["node", "index.js"]



