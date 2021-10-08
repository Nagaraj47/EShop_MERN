const router = require("express").Router();
const User = require("../models/userModel");
var bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    var emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
      return res.send({ msg: "Email Already Exist" });
    }

    var hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    res.send({
      name: user.fullName,
      email: user.email,
      id: user._id,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({ msg: "Invalid email" });
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      return res.send({ msg: "Password is incorrect" });
    }

    res.send({
      name: user.fullName,
      email: user.email,
      id: user._id,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/createadmin", async (req, res) => {
  try {
    var hashedPassword = bcrypt.hashSync("admin", 10);
    const user = new User({
      fullName: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      isAdmin: true,
    });

    await user.save();
    res.send({
      name: user.fullName,
      email: user.email,
      id: user._id,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
