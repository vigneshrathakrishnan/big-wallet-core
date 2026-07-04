import { walletsCollection } from "../collections/wallets.collection.js";
import { ObjectId } from "mongodb";

export async function seedWallets(db) {

    const wallets = [
        // Users
        {
            ownerType: "USER",
            ownerId: new ObjectId("6a48c00f18986e28c9020816"), // Vignesh
            currency: "INR",
            balance: 10000,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "USER",
            ownerId: new ObjectId("6a48c00f18986e28c9020817"), // John
            currency: "INR",
            balance: 5000,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "USER",
            ownerId: new ObjectId("6a48c00f18986e28c9020818"), // Alice
            currency: "INR",
            balance: 2500,
            status: "BLOCKED",
            createdAt: new Date(),
            updatedAt: new Date()
        },

        // Merchants
        {
            ownerType: "MERCHANT",
            ownerId: new ObjectId("6a48c428b10f55a24e98b0f0"), // Netflix
            currency: "INR",
            balance: 0,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "MERCHANT",
            ownerId: new ObjectId("6a48c428b10f55a24e98b0f1"), // Amazon
            currency: "INR",
            balance: 0,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "MERCHANT",
            ownerId: new ObjectId("6a48c428b10f55a24e98b0f2"), // Swiggy
            currency: "INR",
            balance: 0,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "MERCHANT",
            ownerId: new ObjectId("6a48c428b10f55a24e98b0f3"), // Zomato
            currency: "INR",
            balance: 0,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            ownerType: "MERCHANT",
            ownerId: new ObjectId("6a48c428b10f55a24e98b0f4"), // Uber
            currency: "INR",
            balance: 0,
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    await walletsCollection(db).insertMany(wallets);

    console.log("✓ Wallets seeded");
}