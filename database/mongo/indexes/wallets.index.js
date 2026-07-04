const COLLECTION_NAME = "wallets";

export async function createWalletsIndexes(db) {

    const collection = db.collection(COLLECTION_NAME);

    await collection.createIndexes([
        // Will be decided after performance review
    ]);

    console.log("✓ Users indexes created");

}
