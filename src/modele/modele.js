const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },

    productDescription: {
        type: String,
        required: true,
      },
      productImage: {
        type: String,
        required: true,
      }
});


// Create a model based on the schema

const Upload = new mongoose.model('Upload', uploadSchema);

module.exports = Upload;


