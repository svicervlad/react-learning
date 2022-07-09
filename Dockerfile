FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM caddy

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app /srv
