FROM node:12.0.0-alpine
RUN apk add --no-cache ca-certificates
ADD . .
RUN npm install --verbose
RUN npm run build

RUN npm run start