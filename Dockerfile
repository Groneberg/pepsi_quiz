FROM node:18-alpine3.15
WORKDIR /pepsi_quiz
ENV PATH="./node_moduels/.bin:$PATH"
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
