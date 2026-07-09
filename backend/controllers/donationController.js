const Donation = require("../models/Donation");

// Add Donation
const addDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Donation Added Successfully",
      donation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Donations
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addDonation,
  getDonations,
};