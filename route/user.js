const express = require('express');
const {
  addUser,
  getUsers,
  getUser,
  putUser,
  deleteUser,
} = require("../controllers/UserController");
const router = express.Router();

router.route("/User").post(addUser);
router.route("/User").get(getUsers);
router.route("/User/:id").get(getUser);
router.route("/User/:id").put(putUser);
router.route("/User/:id").delete(deleteUser);

module.exports = router;