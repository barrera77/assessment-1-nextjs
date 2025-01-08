import { ObjectId } from "mongodb";
import connectToDatabse from "./mongodb";
import { AssistWalkerOutlined } from "@mui/icons-material";


/**
 * Get all items from a collection in the DB
 * @param collectionName 
 * @returns 
 */
export async function getAll(collectionName: string) {
    try {
        const client = await connectToDatabse();
        const db = client.db(process.env.DB_NAME);
        
        return await db.collection(collectionName).find({}).toArray();
    } catch (error) {
        console.log(`Error fetching dat from ${collectionName}: `, error);
        throw new Error("Failed to fetch data")
    }
}

export async function getById(collectionName: string, id: string) {
    if(!ObjectId.isValid(id)) {
        throw new Error("Invalid object Id")
    }

    try {
        const client = await connectToDatabse();
        const db = client.db(process.env.DB_NAME);

        return await db.collection(collectionName).findOne({ _id: new ObjectId(id)})

    } catch (error) {
        console.log(`Error fetching document by Id from ${collectionName}: `, error)
        throw new Error("Failed to fetch document by Id")
    }

}

export async function insertOne(collectionName: string, data: any) {
    try {
        const client = await connectToDatabse();
        const db = client.db(process.env.DB_NAME);

        return await db.collection(collectionName).insertOne(data)

    } catch (error) {
        console.log(`Error inserting data into ${collectionName}: `, error )
        throw new Error("Failed to insert data")

    }
}