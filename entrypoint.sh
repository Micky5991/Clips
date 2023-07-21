#!/bin/bash

echo "Migrating database to latest schema"

npx prisma migrate deploy

echo "Starting SvelteKit Server"

node .
