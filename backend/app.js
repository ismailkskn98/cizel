const express = require("express");
const app = express();
const PORT = 3000;
const version = "v1";

const userRouter = require(`./${version}/routes/userRoutes.js`);

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Merhaba Express.js 🚀");
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
