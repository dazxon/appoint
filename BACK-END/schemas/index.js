const emailSchema = require("./Email.schema");
const addressSchema = require("./Address.schema");
const phoneSchema = require("./Phone.schema");
const UserModel = require("./User.schema");

module.exports = { UserModel, emailSchema, addressSchema, phoneSchema };
