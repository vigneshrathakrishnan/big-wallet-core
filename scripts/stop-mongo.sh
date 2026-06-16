#!/bin/bash

echo "🛑 Stopping Big Wallet Core MongoDB..."

docker compose stop mongodb

echo ""
echo "✅ MongoDB stopped"