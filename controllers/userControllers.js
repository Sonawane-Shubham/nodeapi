const { findByIdAndUpdate, findOne } = require("../models/userModel");
const User = require("../models/userModel");

async function handlePostSignupUser(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.end("all field required !");
  } else {
    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });
    console.log(username, password);
    res.send(user);
  }
}
async function handlePostLoginUser(req, res) {
  const { username, password } = req.body;

  console.log(username, password);
  const user = await User.findOne({ username: username });
  // const user=User.find()

  if (!user) {
    res.send("User Not Found signup and then try");
  }
  if (password === user.password) {
    res.send("Inalid User Detail");
  } else {
    res.send("Inalid User Detail");
  }
}

async function handlePostForgotPasswordUser(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  res.send(user);
}
module.exports = {
  handlePostSignupUser,
  handlePostLoginUser,
  handlePostForgotPasswordUser,
};
