const express = require("express");
const app = express();
const PORT = 3000;
const version = "v1";

const authRoutes = require(`./${version}/routes/authRoutes.js`);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Merhaba Express.js 🚀");
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
