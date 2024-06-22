FROM node:20 AS build
ARG VITE_ENV
ARG VITE_API_URI
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN echo VITE_ENV=${VITE_ENV} >> /app/.env && \
    echo VITE_API_URI=${VITE_API_URI} >> /app/.env
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
