import {Schema, model, models} from "mongoose"

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    vendorId: {
        type: Number,
        required: true,
    },
    isDiscontinued: {
        type: Boolean,
        required: true,
    },
    qyty: {
        type: Number,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
});

const Product = model("Product", ProductSchema, "product" );

export default Product;