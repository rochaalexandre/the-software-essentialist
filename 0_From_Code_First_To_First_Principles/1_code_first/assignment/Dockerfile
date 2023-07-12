FROM node:18-alpine as development
ENV NODE_ENV=development
WORKDIR /app

CMD ["npm", "dev"]

FROM node:18-alpine as production
CMD ["npm", "start"]
WORKDIR /app

COPY package.json ./package.json
RUN npm install

COPY ./ ./
RUN npm run build

ENV NODE_ENV=production
