FROM tarampampam/node:alpine
ADD . .
RUN npm install
RUN npm run build

RUN npm run start