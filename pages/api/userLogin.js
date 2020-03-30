import {
  isValid,
  mongoFindUser,
  mongoUpdateUser
} from "../../helpers/helperMongo";
import { invalidResponse, validResponse } from "../../helpers/helperResponse";
import { hasMatchingPassword } from "../../helpers/helperBcrypt";

export default async (req, res) => {
  if (
    !isValid(req.body, "object") ||
    !isValid(req.body.username) ||
    !isValid(req.body.password)
  ) {
    invalidResponse(res, { error: "Invalid submission." });
    return;
  }
  const { username, password } = req.body;
  const user = await mongoFindUser(username);
  const isMatchingPassword = await hasMatchingPassword(password, user.password);
  if (isMatchingPassword) {
    mongoUpdateUser(user.username);

    validResponse(res, { success: { username: user.username } });
    return;
  }
  invalidResponse(res, { error: "Failed to log in." });
};
