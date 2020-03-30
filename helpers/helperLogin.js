import { lsSetItem } from "./helperLocalStorage";

const postRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  return json;
};

export const loginUser = async data => {
  const loggedInUser = await postRequest("/api/userLogin", data);
  lsSetItem(loggedInUser);
  return loggedInUser;
};

export const registerUser = async data => {
  return await postRequest("/api/userRegister", data);
};
