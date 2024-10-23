FROM node:14
WORKDIR /src/app
COPY package.json . 
RUN npm install
COPY . .
EXPOSE 3000 9229
CMD ["npm", "run", "start:debug"]
