FROM node:18-alpine

RUN npm install --location=global vim npm jest -y semistandard -y @angular/cli -y bootstrap font-awesome
