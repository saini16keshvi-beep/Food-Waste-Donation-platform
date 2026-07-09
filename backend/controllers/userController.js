const registerUser = async (req, res) => {
  res.json({
    success: true,
    message: "Register API Working",
  });
};

const loginUser = async (req, res) => {
  res.json({
    success: true,
    message: "Login API Working",
  });
};

module.exports = {
  registerUser,
  loginUser,
};