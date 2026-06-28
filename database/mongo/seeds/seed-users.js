import { usersCollection } from "../collections/users.collection.js";

export async function seedUsers(db) {

    const users = [
        {
            name: "Vignesh",
            email: "vignesh@gmail.com",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "John",
            email: "john@gmail.com",
            status: "ACTIVE",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Alice",
            email: "alice@gmail.com",
            status: "BLOCKED",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    await usersCollection(db).insertMany(users);

    console.log("✓ Users seeded");
}