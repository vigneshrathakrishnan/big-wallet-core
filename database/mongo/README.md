wallet-core/
│
├── database/
│   └── mongo/
│       ├── README.md
│       │
│       ├── collections/
│       │   ├── users.collection.js
│       │   ├── wallets.collection.js
│       │   ├── transactions.collection.js
│       │   ├── ledgers.collection.js
│       │   ├── paymentMethods.collection.js
│       │   └── ...
│       │
│       ├── indexes/
│       │   ├── users.indexes.js
│       │   ├── wallets.indexes.js
│       │   └── ...
│       │
│       ├── seeds/
│       │   ├── seed-users.js
│       │   ├── seed-wallets.js
│       │   └── ...
│       │
│       ├── playground/
│       │   ├── crud.mongodb
│       │   ├── aggregation.mongodb
│       │   └── performance.mongodb
│       │
│       ├── scripts/
│       │   ├── init-db.js
│       │   ├── create-indexes.js
│       │   └── drop-db.js
│       │
│       └── notes/
│           ├── modelling.md
│           ├── tradeoffs.md
│           └── postgres-migration.md