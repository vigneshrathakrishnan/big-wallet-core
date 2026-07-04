import { merchantsCollection } from "../collections/merchants.collection.js";

export async function seedMerchants(db) {

    const merchants = [
        {
            name: "Netflix",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Amazon",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Swiggy",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Zomato",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Uber",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    await merchantsCollection(db).insertMany(merchants);

    console.log("✓ Merchants seeded");
}
