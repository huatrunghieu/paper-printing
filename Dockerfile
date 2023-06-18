FROM us-west1-docker.pkg.dev/smarthedge-dev/se-gcr-dev/nginx:1.23.4
RUN cd /etc/nginx/conf.d \
    && rm -r default.conf
COPY default.conf /etc/nginx/conf.d
COPY ./dist /usr/share/nginx/html
