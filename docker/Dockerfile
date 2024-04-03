ARG IMAGE_NAME=fr-paz-ecommerce-v1
ARG APP_PORT=3003
ARG NODE_VERSION=18.13-alpine
ARG BASE_IMG_REPO_URL=node

FROM ${BASE_IMG_REPO_URL}:${NODE_VERSION}

LABEL name=${IMAGE_NAME}

RUN mkdir -p /opt/fr-paz-ecommerce && chown -R node:node /opt/fr-paz-ecommerce

WORKDIR /opt/fr-paz-ecommerce
USER node

COPY ../package.json .
COPY ../yarn.lock .
COPY ../tsconfig*.json .
COPY ../nest-cli.json .
COPY --chown=node:node ../node_modules/ ./node_modules/
COPY --chown=node:node ../dist/ ./dist/


EXPOSE ${APP_PORT}
ENTRYPOINT ["yarn", "start:prod"]