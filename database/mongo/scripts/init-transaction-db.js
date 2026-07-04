import { MongoClient } from "mongodb";

// import { createTransactionsIndexes } from "../indexes/transactions.index.js";

import { seedTransactions } from "../seeds/seed-transactions.js";

const client = new MongoClient("mongodb://admin:admin@localhost:27017");

async function initDatabase() {

    try {

        await client.connect();

        console.log("✓ Connected");

        const db = client.db("wallet_core");

        /*
         * Create Collection
         */
        
        await db.createCollection("transactions");

        console.log("✓ Transactions collection created");

        /*
         * Create Indexes
         */

        // await createUsersIndexes(db);

        /*
         * Seed Data
         */

        await seedTransactions(db);

        console.log("✓ Database initialized");

    } catch (error) {

        console.error(error);

    } finally {

        await client.close();

    }

}

initDatabase();