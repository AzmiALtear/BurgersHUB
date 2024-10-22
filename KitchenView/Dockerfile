FROM node:14
WORKDIR /src/app 
COPY package.json . 
RUN npm install
COPY . .
EXPOSE 4000 9230
CMD ["npm", "run", "start:debug"]
