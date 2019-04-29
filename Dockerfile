FROM node:12.0.0-alpine
RUN apk add --no-cache ca-certificates
ADD . .
RUN yarn
RUN yarn run build

RUN yarn run start