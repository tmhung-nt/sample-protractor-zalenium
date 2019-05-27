FROM node

WORKDIR /tests

COPY ./package.json .
RUN npm install

ENV LIBRARY_PATH=/lib:/usr/lib

ENTRYPOINT ./Docker/wait-for-zalenium.sh  ${SELENIUM_URL} ./Docker/docker-run.sh