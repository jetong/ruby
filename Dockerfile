FROM node:12
COPY . /workdir
RUN npm install
RUN npm install -g serve
CMD serve -s /workdir -l 3002
