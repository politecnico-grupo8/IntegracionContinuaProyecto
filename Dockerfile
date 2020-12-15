FROM node:lts
WORKDIR /angular
COPY . .
RUN npm install
CMD node node_modules/@angular/cli/bin/ng serve --host 0.0.0.0 --disable-host-check