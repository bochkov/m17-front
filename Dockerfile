FROM node:latest AS builder
COPY . /
RUN npm update && npm run build

FROM nginx:alpine
RUN apk update && apk add tzdata
ENV TZ=Asia/Yekaterinburg
COPY default.conf /etc/nginx/conf.d/
COPY --from=builder build /usr/share/nginx/html
