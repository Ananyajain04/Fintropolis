const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  company: { type: String, required: true },
  income: { type: Number, required: true },
  expenditure: { type: Number, required: true },
  goals: { type: [String], validate: {
    validator: (v) => Array.isArray(v) && v.length <= 3,
    message: 'Goals must contain at most 3 items.'
    }, required: true },
  assets: { type: [String], validate: {
    validator: (v) => Array.isArray(v) && v.length <= 3,
    message: 'Assests must contain at most 3 items.'
    },required: true },
  liabilities: { type: [String], validate: {
    validator: (v) => Array.isArray(v) && v.length <= 3,
    message: 'Liabilities must contain at most 3 items.'
    }, required: true }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
