# Offline validation: same image and command as CI.
#   docker build -t portfolio-verify .
#   docker run --rm --network none portfolio-verify
FROM mcr.microsoft.com/playwright:v1.63.0-noble
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV CI=1
CMD ["npm", "run", "verify"]
