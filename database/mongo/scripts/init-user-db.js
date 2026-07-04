import { MongoClient } from "mongodb";

import { createUsersIndexes } from "../indexes/users.index.js";
import { seedUsers } from "../seeds/seed-users.js";

const client = new MongoClient("mongodb://admin:admin@localhost:27017");

async function initDatabase() {

    try {

        await client.connect();

        console.log("✓ Connected");

        const db = client.db("wallet_core");

        /*
         * Create Collection
         */

        await db.createCollection("users");

        console.log("✓ Users collection created");

        /*
         * Create Indexes
         */

        await createUsersIndexes(db);

        /*
         * Seed Data
         */

        await seedUsers(db);

        console.log("✓ Database initialized");

    } catch (error) {

        console.error(error);

    } finally {

        await client.close();

    }

}

initDatabase();