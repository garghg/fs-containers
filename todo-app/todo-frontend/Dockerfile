FROM node:24 AS build
WORKDIR /usr/src/app
COPY . .

ENV VITE_BACKEND_URL=/api

RUN npm ci
RUN npm run build

FROM build AS test
RUN npm test

FROM nginx:alpine
COPY --from=test /usr/src/app/dist /usr/share/nginx/html