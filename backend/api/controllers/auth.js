const User = require("../../api/models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const register = async (req, res) => {
  const { email, password, firstname, lastname, age, company, income, expenditure, goals, assets, liabilities } = req.body;
  try {
    const user = new User({ email, password, firstname, lastname, age, company, income, expenditure, goals, assets, liabilities });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
