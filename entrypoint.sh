echo "Migrating database to latest schema"

npx prisma migrate deploy

node server.js
