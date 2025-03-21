const express = require("express");
const { PORT } = require("./config/envFile");

require("dotenv").config();

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
