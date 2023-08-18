const UserModel = require("../../schemas/User.schema");

const userRegister = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) return res.status(404).json({ message: "Invalid credentials" });
    await UserModel.create(req.body);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userRegister;
