import { MongoClient } from "mongodb";

// import { createMerchantsIndexes } from "../indexes/merchants.index.js";

import { seedMerchants } from "../seeds/seed-merchants.js";

const client = new MongoClient("mongodb://admin:admin@localhost:27017");

async function initDatabase() {

    try {

        await client.connect();

        console.log("✓ Connected");

        const db = client.db("wallet_core");

        /*
         * Create Collection
         */
        
        await db.createCollection("merchants");

        console.log("✓ Merchants collection created");

        /*
         * Create Indexes
         */

        // await createUsersIndexes(db);

        /*
         * Seed Data
         */

        await seedMerchants(db);

        console.log("✓ Database initialized");

    } catch (error) {

        console.error(error);

    } finally {

        await client.close();

    }

}

initDatabase();