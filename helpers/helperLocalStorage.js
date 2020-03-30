export const lsSetItem = userObject => {
  if (!localStorage) return;
  localStorage.setItem("user", JSON.stringify(userObject));
};
