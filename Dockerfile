FROM node:12

COPY . /opt/app

WORKDIR /opt/app

RUN npm build

CMD npm start