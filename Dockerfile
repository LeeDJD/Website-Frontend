FROM node:alpine
RUN apk add --no-cache git ca-certificates
ADD . .
RUN npm run build

RUN npm run start