import Product from '@/models/Product';
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { stat } from 'fs';

/**
 * Get all products
 * @returns all products
 */
export async function getAllProducts() {
  try {
    await connectToDatabase(); // Ensure the database connection is established
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

/**
 *
 * @param request Get products by category
 * @returns  products by category
 */
export async function getProductsByCategory(category?: string) {
  try {
    if (category) {
      return await Product.find({ category });
    }

    return await Product.find({});
  } catch (error) {
    console.error('Error fetching category: ', error);
    return NextResponse.json(
      { error: 'Failed to fetch product category' }, 
      { status: 500 }
    );
  }
}
