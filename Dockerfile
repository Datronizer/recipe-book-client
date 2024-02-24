# Dockerfile for React client

# Build React client
FROM node:16.14.0

WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]