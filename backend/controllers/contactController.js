const Contact = require("../models/Contact");

// Add Contact Message
const addContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: "Error",
    });
  }
};

module.exports = { addContact };
