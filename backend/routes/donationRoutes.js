const express = require("express");
const router = express.Router();

const {
  addDonation,
  getDonations,
} = require("../controllers/donationController");

// Add Donation
router.post("/", addDonation);

// Get All Donations
router.get("/", getDonations);

module.exports = router;