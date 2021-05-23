FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
ARG NEXT_PUBLIC_STRIPE_KEY
ENV NEXT_PUBLIC_STRIPE_KEY=${NEXT_PUBLIC_STRIPE_KEY}
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run staging