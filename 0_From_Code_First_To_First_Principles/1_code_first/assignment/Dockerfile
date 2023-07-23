FROM node:18-alpine as build
WORKDIR /app
ADD . .

COPY package.json ./package.json
RUN npm install

RUN npx prisma generate

FROM node:18-alpine as development
ENV NODE_ENV=development
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

CMD ["npm", "run", "start:dev"]


