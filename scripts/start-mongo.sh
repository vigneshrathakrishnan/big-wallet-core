#!/bin/bash

echo "🚀 Starting Big Wallet Core MongoDB..."

docker compose up -d mongodb

echo ""
echo "✅ MongoDB is running"
echo ""
echo "Database:"
echo "  Host: localhost"
echo "  Port: 27017"
echo "  Username: admin"
echo "  Password: admin"
echo ""
echo "🔗 Connection URI:"
echo "  mongodb://admin:admin@localhost:27017"
echo ""
echo "📦 To stop:"
echo "  docker compose stop mongodb"
echo ""
echo "📜 To view logs:"
echo "  docker logs -f big-wallet-mongodb"
echo ""
echo "🧭 MongoDB Compass:"
echo "  mongodb://admin:admin@localhost:27017"