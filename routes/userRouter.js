const express = require("express");
const router = express.Router();
const allUsers = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running.", allUsers }).status(200);
});

// router.get("/me", [requireSignin, getProfile]);
// router.get("/:userId", [requireSignin, isAuth], getUserById);
// router.put("/:userId", [requireSignin, isAuth], updateUserById);

// router.param("userId", userById);


module.exports = router;
