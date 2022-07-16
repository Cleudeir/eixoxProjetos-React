FROM node:16.3.0-alpine
WORKDIR /home
COPY . .
RUN ls
RUN npm install -g --force --quite npm@latest
RUN npm install --force --quite
RUN npm run dev
USER node 
