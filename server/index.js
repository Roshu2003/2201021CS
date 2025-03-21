const express = require("express");
const core = require("core");
const { PORT } = require("./config/envFile");

require("dotenv").config();

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express();
app.use(core());

app.use(express.json());

app.use("/users", userRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
