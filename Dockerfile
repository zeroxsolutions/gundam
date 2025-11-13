# Dockerfile for the project
FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm ci

COPY . .

CMD ["npm", "run", "storybook"]