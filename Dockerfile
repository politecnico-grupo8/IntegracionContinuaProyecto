FROM node:lts
WORKDIR /angular
COPY . .
RUN npm install
RUN npm run ng test -- --watch=false --code-coverage
CMD node node_modules/@angular/cli/bin/ng serve --host 0.0.0.0 --disable-host-check
