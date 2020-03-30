import {
  isValid,
  mongoFindUser,
  mongoSaveUser
} from "../../helpers/helperMongo";
import { validResponse, invalidResponse } from "../../helpers/helperResponse";

export default async (req, res) => {
  if (
    !isValid(req.body, "object") ||
    !isValid(req.body.username) ||
    !isValid(req.body.password)
  ) {
    invalidResponse(res, { error: "Invalid submission" });
    return;
  }
  const { username, password } = req.body;
  const user = await mongoFindUser(username);
  if (user) {
    invalidResponse(res, { error: "Username already exists." });
    return;
  }
  const newUser = await mongoSaveUser(username, password);
  validResponse(res, { success: newUser.username });
};
