FROM node:16.3.0-alpine3.12@sha256:0fb0aead1becafabac041c84e497d1f15a4db6d6c822ec9c09317dfe43a3cfb7 as builder

RUN apk update --no-cache && apk upgrade && \
    apk add --no-cache bash postgresql-client

WORKDIR /home/app
