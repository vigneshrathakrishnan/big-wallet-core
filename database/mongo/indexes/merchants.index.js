const COLLECTION_NAME = "merchants";

export async function createMerchantsIndexes(db) {

    const collection = db.collection(COLLECTION_NAME);

    await collection.createIndexes([
        // Will be decided after performance review
    ]);

    console.log("✓ Merchants indexes created");

}
