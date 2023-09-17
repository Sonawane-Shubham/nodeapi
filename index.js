require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const connectDB = require("./connect");
const app = express();
const User = require("./models/userModel");
const PORT = process.env.PORT;
const userRouter = require("./routes/userRouter");



app.use(cors());
//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to database
connectDB();

//home route
app.get("/", (req, res) => {
  res.send("api is running.......");
});

//handle login ans signup
app.use("/api/users", userRouter);

app.listen(PORT, (err) => {
  console.log(`server is running on Port :-  ${PORT}`);
});
