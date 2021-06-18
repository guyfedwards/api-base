FROM node:16.3.0-alpine3.12@sha256:0fb0aead1becafabac041c84e497d1f15a4db6d6c822ec9c09317dfe43a3cfb7 as builder

RUN apk update --no-cache && apk upgrade && \
    apk add --no-cache bash postgresql-client

WORKDIR /home/app

COPY ./package.json ./yarn*.lock ./tsconfig.json ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY ./src ./src
RUN yarn build

FROM node:16.3.0-alpine3.12@sha256:0fb0aead1becafabac041c84e497d1f15a4db6d6c822ec9c09317dfe43a3cfb7

WORKDIR /home/app
USER node

COPY ./package.json ./yarn*.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

COPY --from=builder /home/app/dist ./dist

CMD ["node", "dist/index.js"]
