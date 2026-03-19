const { MongoClient } = require('mongodb');

// YAHAN PASTE KARO connection string
const uri = "mongodb+srv://Ronitkumar:Ronit123@1stcluster.9mczwfb.mongodb.net/?appName=1stcluster";
// <password> ki jagah apna asli password dalna mat bhoolna!

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("MongoDB se connect ho gaya!");
        
        // Ab database operations kar sakte ho
        
    } finally {
        await client.close();
    }
}

run().catch(console.dir);