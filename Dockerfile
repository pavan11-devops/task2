FROM node:alpine
WORKDIR /web
copy package.json .
RUN npm install
COPY . . 
CMD ["node", "index.js"]
