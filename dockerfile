FROM node:16-alpine as build
WORKDIR /app
COPY . ./
RUN npm install 
CMD ['npm', 'start']