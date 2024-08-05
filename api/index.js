const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
dotenv.config();


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const app = express();
app.use(express.json())

app.use("/api/user", userRouter)

app.use("/api/auth", authRouter)






app.listen(3010, () => {
  console.log("Server is running on port 3010!");
});
