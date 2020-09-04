FROM node:12 AS base
WORKDIR /app
COPY . .
RUN yarn install --silent
RUN yarn build:all --silent

FROM node:12 AS api-gateway
EXPOSE 3333
WORKDIR /app
COPY --from=base /app/node_modules /app/node_modules
COPY --from=base /app/dist/apps/api-gateway .
CMD ["node", "main.js"]

FROM node:12 AS todo
WORKDIR /app
COPY --from=base /app/node_modules /app/node_modules
COPY --from=base /app/dist/apps/todo .
CMD ["node", "main.js"]
