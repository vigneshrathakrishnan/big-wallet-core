const COLLECTION_NAME = "users";

export function usersCollection(db) {
    return db.collection(COLLECTION_NAME);
}

export async function createUser(db, user) {
    return usersCollection(db).insertOne(user);
}

export async function findUserByEmail(db, email) {
    return usersCollection(db).findOne({ email });
}

export async function updateUserStatus(db, userId, status) {
    return usersCollection(db).updateOne(
        { _id: userId },
        {
            $set: {
                status,
                updatedAt: new Date()
            }
        }
    );
}

export async function deleteUser(db, userId) {
    return usersCollection(db).deleteOne({
        _id: userId
    });
}