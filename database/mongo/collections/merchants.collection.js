const COLLECTION_NAME = "merchants";

export function merchantsCollection(db) {
    return db.collection(COLLECTION_NAME);
}

export async function createMerchant(db, merchant) {
    return merchantsCollection(db).insertOne(merchant);
}

export async function findMerchantByName(db, name) {
    return merchantsCollection(db).findOne({ name });
}

export async function updateMerchantstatus(db, merchantId, status) {
    return merchantsCollection(db).updateOne(
        { _id: merchantId },
        {
            $set: {
                status,
                updatedAt: new Date()
            }
        }
    );
}

export async function deleteMerchant(db, merchantId) {
    return merchantsCollection(db).deleteOne({
        _id: merchantId
    });
}
