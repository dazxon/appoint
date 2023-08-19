const invitationModel = require("../../schemas/Invitation.schema");

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await invitationModel.updateOne(
      { _id: id, deleted: false },
      { state: "deleted", deleted: true }
    );
    return res.status(200).send(deleteResult);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = deleteById;
