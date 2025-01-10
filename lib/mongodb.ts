import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Failed to connect to MongoDB');
    }
  } else {
    console.log('Reusing existing MongoDB connection');
  }
}
