const mongoose = require('mongoose');

// Function to connect to MongoDB using async/await
const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/my-test-image');

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

connectToMongoDB();



