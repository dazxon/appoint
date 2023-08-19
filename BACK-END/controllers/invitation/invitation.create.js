const invitationModel = require("../../schemas/Invitation.schema");
const UserModel = require("../../schemas/User.schema");

const invitationCreate = async (req, res) => {
  try {
    const sender = await UserModel.findOne({ email: req.user.email });
    if (!sender) {
      return res.status(404).json({ message: "Sender not found" });
    }

    const exp = req.body.expirationDate;

    const invitation = new invitationModel({
      sender: sender._id,
      expirationDate: exp,
    });

    await invitation.save();
    return res.status(201).send(invitation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = invitationCreate;
