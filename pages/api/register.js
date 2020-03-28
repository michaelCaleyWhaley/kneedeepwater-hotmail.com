// import mongoose from "mongoose";
// import User from "../../models/userModel";

// export default (req, res) => {
//   mongoose.connect("mongodb://localhost/caley", { useNewUrlParser: true });

//   const db = mongoose.connection;
//   db.on("error", console.error.bind(console, "connection error:"));

//   db.once("open", () => {
//     const user = new User({ name: "Michael" });
//     user.save(function(err, user) {
//       if (err) return console.error(err);
//     });
//   });

//   // if (req.method === "POST") {
//   //   res.statusCode = 200;
//   //   res.setHeader("Content-Type", "application/json");
//   //   res.end(JSON.stringify({ exists: true }));
//   // }
// };
