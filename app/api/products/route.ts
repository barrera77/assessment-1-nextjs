import { NextResponse } from 'next/server';
import { getAllProducts } from '@/controllers/productController';

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.log('Error in the GET /products: ', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
