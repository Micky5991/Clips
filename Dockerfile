FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

# Install dependencies only when needed
FROM base AS deps-prod
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --omit dev
RUN npx prisma generate


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

COPY --chown=sveltekit:nodejs ./package*.json ./
COPY --from=deps-prod --chown=sveltekit:nodejs /app/node_modules ./node_modules

COPY --from=builder --chown=sveltekit:nodejs /app/prisma ./prisma
COPY --from=builder --chown=sveltekit:nodejs /app/build/ ./

COPY --chown=sveltekit:nodejs ./entrypoint.sh ./entrypoint.sh

USER sveltekit

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT [ "sh", "entrypoint.sh" ]
