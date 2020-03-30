import mongoose from "mongoose";
import User from "../models/userModel";
import { generateHashPassword } from "./helperBcrypt";
import { mongoAddress } from "../constants";

export const isValid = (value, typeofValue = "string") => {
  if (!value) return false;
  if (value.length < 1) return false;
  if (typeof value !== typeofValue) return false;
  return true;
};

export const mongoConnect = () => {
  if (mongoose.connections[0].readyState) return;
  mongoose.connect(mongoAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export const mongoFindUser = async userName => {
  try {
    mongoConnect();
    const db = mongoose.connection;
    await db.startSession();
    const user = await User.findOne({ username: userName });
    return user;
  } catch (err) {
    if (err) return console.error(err);
  }
};

export const mongoSaveUser = async (userName, password) => {
  try {
    mongoConnect();
    const db = mongoose.connection;
    await db.startSession();
    const hashedPassword = await generateHashPassword(password);
    const newUser = new User({ username: userName, password: hashedPassword });
    return await newUser.save();
  } catch (err) {
    if (err) return console.error(err);
  }
};

export const mongoUpdateUser = async userName => {
  try {
    mongoConnect();
    const db = mongoose.connection;
    await db.startSession();
    const updatedUser = await User.findOneAndUpdate(
      { username: userName },
      { jwt: "test" }
    );
    console.log(`updatedUser: `, updatedUser);
    
    return updatedUser;
  } catch (err) {
    if (err) return console.error(err);
  }
};
