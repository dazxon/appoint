const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema(
  {
    number: String,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    state: {
      type: String,
      enum: [
        "created",
        "sent",
        "received",
        "answered",
        "rejected",
        "expired",
        "deleted",
      ],
      default: "created",
    },
    expirationDate: {
      type: Date,
      default: function () {
        const oneMonth = new Date();
        oneMonth.setMonth(oneMonth.getMonth() + 1);
        return oneMonth;
      },
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const invitationModel = mongoose.model("Invitation", invitationSchema);

module.exports = invitationModel;
