FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM --platform=linux/amd64 caddy

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app/build /srv
