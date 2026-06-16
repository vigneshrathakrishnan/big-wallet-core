#!/bin/bash

echo "🚀 Starting Big Wallet Core PostgreSQL..."

docker compose up -d

echo ""
echo "✅ PostgreSQL is running"
echo ""
echo "Database:"
echo "  Host: localhost"
echo "  Port: 5432"
echo "  User: postgres"
echo "  Password: postgres"
echo "  Database: big_wallet_core"
echo ""
echo "📦 To stop:"
echo "  docker compose down"
echo ""
echo "📜 To view logs:"
echo "  docker logs -f big-wallet-postgres"