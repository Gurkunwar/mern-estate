const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error.js");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ msg: "user created successfully!" });
  } catch (err) {
    next(err);
  }
};

module.exports = signup;
