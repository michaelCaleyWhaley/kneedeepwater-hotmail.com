export const fetchUserData = async () => {
  return { exists: true };
};

export const loginFetch = async data => {
  const response = await fetch("/api/userLogin", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(`json: `, json);

  return json;
};
