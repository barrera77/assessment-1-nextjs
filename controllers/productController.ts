import Product from "@/models/Product";

export async function getAllProducts() {
    try {
        const products = await Product.find({});
        
        return products;
    } catch (error) {
        console.log("Error fetching products", error);
        throw new Error("Failed to fetch data")
    }
}

