FROM nginx
RUN rm /usr/share/nginx/html/index.html
COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx
