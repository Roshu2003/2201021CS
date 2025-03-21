const express = require("express");
const router = express.Router();

const { fetchData } = require("../services/api");

router.get("/", async (req, res) => {
  try {
    const user = await fetchData("/users");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

router.get("/:userId/post", async (req, res) => {
  try {
    const { userId } = req.params;
    const queryParams = req.query;

    const posts = await fetchData(`/users/${userId}/post`, queryParams);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
