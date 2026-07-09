const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);