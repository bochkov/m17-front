FROM nginx:alpine
RUN apk update && apk add tzdata
ENV TZ=Aisa/Yekaterinburg
COPY default.conf /etc/nginx/conf.d/
COPY build /usr/share/nginx/html
