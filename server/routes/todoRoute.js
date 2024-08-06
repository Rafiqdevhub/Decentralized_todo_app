const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, getTodos);
router.post("/", auth, createTodo);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
