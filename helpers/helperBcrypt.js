import bcrypt from "bcrypt";
const saltRounds = 10;

export const generateHashPassword = async plainText => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(plainText, salt);
  return hash;
};

export const hasMatchingPassword = async (
  plainTextPassword,
  hashedPassword
) => {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};
