import { MongoClient } from "mongodb";

// import { createWalletsIndexes } from "../indexes/wallets.index.js";

import { seedWallets } from "../seeds/seed-wallets.js";

const client = new MongoClient("mongodb://admin:admin@localhost:27017");

async function initDatabase() {

    try {

        await client.connect();

        console.log("✓ Connected");

        const db = client.db("wallet_core");

        /*
         * Create Collection
         */
        
        await db.createCollection("wallets");

        console.log("✓ Wallets collection created");

        /*
         * Create Indexes
         */

        // await createUsersIndexes(db);

        /*
         * Seed Data
         */

        await seedWallets(db);

        console.log("✓ Database initialized");

    } catch (error) {

        console.error(error);

    } finally {

        await client.close();

    }

}

initDatabase();