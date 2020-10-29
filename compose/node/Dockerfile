FROM node:11.14.0

RUN mkdir /frontend

COPY ./frontend/package* /frontend/

RUN cd /frontend \
    && npm i

WORKDIR /frontend

EXPOSE 3000
