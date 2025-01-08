import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {};

let client: MongoClient | null = null;
let cLientPromise: Promise<MongoClient>;

async function connectToDatabse(): Promise<MongoClient> {
    if(!uri) {
        throw new Error("MONGODB_URI is not defined")
    }

    if(!client) {
        client = new MongoClient(uri, options);
        cLientPromise = client.connect();
    }

    try {
        await cLientPromise;
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.log("Error connecting to Mongo DB: ", error);
        throw new Error("Failed to connect to Mongo DB");

    }

    return client;    
}

export default connectToDatabse;