
FROM node:latest

WORKDIR /mailer

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npm run swagger

CMD ["npm","start"]
EXPOSE 3000