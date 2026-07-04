const COLLECTION_NAME = "wallets";

export function walletsCollection(db) {
    return db.collection(COLLECTION_NAME);
}

export async function createWallet(db, wallet) {
    return walletsCollection(db).insertOne(wallet);
}

export async function findWalletByUserId(db, userId) {
    return walletsCollection(db).findOne({ userId });
}

export async function updateWalletStatus(db, userId, status) {
    return walletsCollection(db).updateOne(
        { _id: userId },
        {
            $set: {
                status,
                updatedAt: new Date()
            }
        }
    );
}

export async function deleteWallet(db, walletId) {
    return walletsCollection(db).deleteOne({
        _id: walletId
    });
}