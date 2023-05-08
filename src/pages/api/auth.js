import User from "../../../models/user";
import connectDb from "../../../middleware/db";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      if (await User.findOne({ email: req.body.email })) {
        res.send("User with this email already exist");
      } else {
        const keypassword = jwt.sign(req.body.password, JWT_SECRET);
        const password = req.body.password;
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user.save();
        res.json(user);
      }
      break;
    case "GET":
      let users = await User.find();
      res.status(200).json({ok:'got it'});
      break;
    default:
      res.status(400).send("bad request");
      break;
  }
};
export default connectDb(handler);
