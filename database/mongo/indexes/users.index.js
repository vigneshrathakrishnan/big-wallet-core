const COLLECTION_NAME = "users";

export async function createUsersIndexes(db) {

    const collection = db.collection(COLLECTION_NAME);

    await collection.createIndexes([
        {
            key: {
                email: 1
            },
            unique: true,
            name: "uk_users_email"
        },
        {
            key: {
                status: 1
            },
            name: "idx_users_status"
        },
        {
            key: {
                createdAt: -1
            },
            name: "idx_users_created_at"
        }
    ]);

    console.log("✓ Users indexes created");
}