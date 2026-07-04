const COLLECTION_NAME = "transactions";

export function transactionsCollection(db) {
    return db.collection(COLLECTION_NAME);
}

export async function createTransaction(db, transaction) {
    return transactionsCollection(db).insertOne(transaction);
}

export async function findTransactionById(db, transactionId) {
    return transactionsCollection(db).findOne({ transactionId });
}

// export async function updateMerchantstatus(db, merchantId, status) {
//     return transactionsCollection(db).updateOne(
//         { _id: merchantId },
//         {
//             $set: {
//                 status,
//                 updatedAt: new Date()
//             }
//         }
//     );
// }

export async function deleteTransactionId(db, transactionId) {
    return transactionsCollection(db).deleteOne({
        _id: transactionId
    });
}
