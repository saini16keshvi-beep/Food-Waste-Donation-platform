const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
    },

    foodName: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },

    pickupAddress: {
      type: String,
      required: true,
    },

    pickupDate: {
      type: String,
      required: true,
    },

    pickupTime: {
      type: String,
      required: true,
    },

    additionalInfo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);