const express = require('express')
const { getTodoApp, createTodoApp, getTodoById, editTodoApp, deleteTodo } = require("../controllers/todoAppController");
const router = express.Router();


router.get("/", getTodoApp)
router.post("/create", createTodoApp)
router.post("/edit", editTodoApp)
router.get("/getById/:id", getTodoById);
router.get("/delete/:id", deleteTodo);


module.exports = router;