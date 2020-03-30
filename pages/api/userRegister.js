import mongoose from "mongoose";
import User from "../../models/userModel";

const isValid = (value, typeofValue = "string") => {
  if (!value) return false;
  if (value.length < 1) return false;
  if (typeof value !== typeofValue) return false;
  return true;
};

const invalidResponse = (res, messageObject) => {
  res.statusCode = 400;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(messageObject));
};

const validResponse = (res, messageObject) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(messageObject));
};

const mongoFindUser = async (userName, callback) => {
  mongoose.connect("mongodb://localhost/caley", { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", async () => {
    User.findOne({ name: userName }, function(err, user) {
      if (err) return console.error(err);
      callback(user);
    });
  });
};

export default async (req, res) => {
  if (
    !isValid(req.body, "object") ||
    !isValid(req.body.username) ||
    !isValid(req.body.password)
  ) {
    invalidResponse(res, { error: "Invalid submission" });
    return;
  }
  const { username } = req.body;
  // this needs to be a promise for next to see
  mongoFindUser(username, user => {
    validResponse(res, user);
  });
  // console.log(`isExistingUser: `, isExistingUser);

  // if (req.method === "POST") {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(JSON.stringify({ exists: true }));
  // }
};
