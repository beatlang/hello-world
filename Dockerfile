FROM arm64v8/node:21-alpine
LABEL org.opencontainers.image.source="https://github.com/beatlang/hello-world"
COPY . /app
WORKDIR /app
RUN npm ci
CMD node index.js
