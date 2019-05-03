FROM node:12.1.0-alpine
RUN apk --no-cache add ca-certificates
ADD . .
RUN yarn
RUN yarn run build

CMD yarn run start