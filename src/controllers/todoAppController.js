const multer = require('multer')
const path = require('path')

const { getListTodoApp, addTodoApp, getById, updateTodoApp, deleteTodoApp } = require('../service/todoAppSerivce');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})


const getTodoApp = async(req, res) => {
    try {
        let list = await getListTodoApp();
        console.log(list);
        if (list.length === 0) {
            console.log("No data found");
            return res.status(404).send("No data found");
        }
        list.length == 0 ?  nr :  nr 
        return res.status(200).send(list);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }

};

const createTodoApp = async(req, res) => {
    try {
        let name = req.body.name;
        let flag = await addTodoApp(name);
        if (!flag) {
            console.log(flag);
            return res.status(400).send("Failed to create todo");
        }
        return res.status(201).send("Todo created successfully");
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }
};

const editTodoApp = async(req, res) => {
    try {
        const checkId = await getById(req.body.id);
        console.log(checkId + "rong~");
        if (checkId.length === 0) {
            return res.status(404).send("not found todo");
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }

    try {
        let flag = await updateTodoApp(req);
        if (!flag) {
            console.log(flag);
            return res.status(400).send("Failed to edit todo");
        }
        return res.status(200).send("Todo edit successfully");
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }
};

const getTodoById = async(req, res) => {
    try {
        const todo = await getById(req.params.id);
        console.log(todo);
        if (todo.length === 0) {
            return res.status(403).send("not found todo");
        }
        return res.status(200).send(todo);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }
};

const deleteTodo = async(req, res) => {
    try {
        const checkId = await getById(req.params.id);
        console.log(checkId + "rong~");
        if (checkId.length === 0) {
            return res.status(404).send("not found todo");
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }

    try {
        const flag = await deleteTodoApp(req.params.id);
        if (!flag) {
            return res.status(404).send("not found todo");
        }
        return res.status(200).send("delete done");
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }
};

module.exports = { getTodoApp, createTodoApp, getTodoById, editTodoApp, deleteTodo };