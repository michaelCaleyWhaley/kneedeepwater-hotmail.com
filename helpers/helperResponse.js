export const invalidResponse = (res, messageObject) => {
  res.statusCode = 400;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(messageObject));
};

export const validResponse = (res, messageObject) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(messageObject));
};
