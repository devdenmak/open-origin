FROM node:22.2.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --global orval
RUN npm install --global storybook
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run api-generate
RUN npm run build
RUN npm run build-storybook

CMD ["npm", "start"]
