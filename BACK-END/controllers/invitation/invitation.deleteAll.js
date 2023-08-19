const invitationModel = require("../../schemas/Invitation.schema");

const deleteAll = async (req, res) => {
  try {
    const { _id } = req.user;
    const resultDeleteInvitations = await invitationModel.updateMany(
      {
        sender: _id,
        deleted: false,
      },
      { state: "deleted", deleted: true }
    );
    return res.status(200).send(resultDeleteInvitations);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = deleteAll;
