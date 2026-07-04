import { ObjectId } from "mongodb";
import { transactionsCollection } from "../collections/transactions.collection.js";

export async function seedTransactions(db) {

    const transactions = [
        // Vignesh -> Netflix (₹500)
        {
            transactionId: "TXN001",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3c1"),
            type: "DEBIT",
            amount: 500,
            balanceBefore: 10000,
            balanceAfter: 9500,
            status: "SUCCESS",
            createdAt: new Date()
        },
        {
            transactionId: "TXN001",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3c1"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            type: "CREDIT",
            amount: 500,
            balanceBefore: 0,
            balanceAfter: 500,
            status: "SUCCESS",
            createdAt: new Date()
        },

        // John -> Swiggy (₹250)
        {
            transactionId: "TXN002",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3bf"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3c3"),
            type: "DEBIT",
            amount: 250,
            balanceBefore: 5000,
            balanceAfter: 4750,
            status: "SUCCESS",
            createdAt: new Date()
        },
        {
            transactionId: "TXN002",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3c3"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3bf"),
            type: "CREDIT",
            amount: 250,
            balanceBefore: 0,
            balanceAfter: 250,
            status: "SUCCESS",
            createdAt: new Date()
        },

        // Netflix -> Vignesh Refund (₹200)
        {
            transactionId: "TXN003",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3c1"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            type: "DEBIT",
            amount: 200,
            balanceBefore: 500,
            balanceAfter: 300,
            status: "SUCCESS",
            createdAt: new Date()
        },
        {
            transactionId: "TXN003",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3c1"),
            type: "CREDIT",
            amount: 200,
            balanceBefore: 9500,
            balanceAfter: 9700,
            status: "SUCCESS",
            createdAt: new Date()
        },

        // Vignesh -> John (₹1000)
        {
            transactionId: "TXN004",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3bf"),
            type: "DEBIT",
            amount: 1000,
            balanceBefore: 9700,
            balanceAfter: 8700,
            status: "SUCCESS",
            createdAt: new Date()
        },
        {
            transactionId: "TXN004",
            walletId: new ObjectId("6a48c988ff2fef3dcc0ff3bf"),
            counterpartyWalletId: new ObjectId("6a48c988ff2fef3dcc0ff3be"),
            type: "CREDIT",
            amount: 1000,
            balanceBefore: 4750,
            balanceAfter: 5750,
            status: "SUCCESS",
            createdAt: new Date()
        }
    ];

    await transactionsCollection(db).insertMany(transactions);

    console.log("✓ Transactions seeded");
}
