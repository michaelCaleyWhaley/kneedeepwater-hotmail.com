// import mongoose from "mongoose";
// import User from "../../models/userModel";

// export default (req, res) => {
//   let body = {};
//   if (req.method === "POST") {
//     mongoose.connect("mongodb://localhost/caley", { useNewUrlParser: true });

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "connection error:"));

//     db.once("open", () => {
//       User.find(function(err, users) {
//         if (err) return console.error(err);

//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify({ exists: true, users }));
//       });
//     });
//   }
// };
