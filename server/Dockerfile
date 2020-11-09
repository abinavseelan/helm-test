FROM node:14.15.0-alpine3.10

WORKDIR /usr/share/app

COPY package.json package.json
COPY node_modules node_modules
COPY server.js server.js

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]