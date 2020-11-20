FROM node:12 AS base
WORKDIR /app
COPY package.json .
RUN yarn install --silent

FROM node:12 AS todo
WORKDIR /app
COPY --from=base /app/node_modules /app/node_modules
COPY . .
CMD yarn start:todo

FROM node:12 AS api-gateway
EXPOSE 3333
WORKDIR /app
COPY --from=base /app/node_modules /app/node_modules
COPY . .
CMD yarn start:api-gateway
