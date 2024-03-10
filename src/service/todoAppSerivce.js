const connection = require('../config/database');
const getListTodoApp = async(req, res) => {
    const [result, fields] = await connection.query('SELECT * FROM todo');
    let list = result;
    console.log(list);
    return list;
}
const addTodoApp = async(req) => {
    let flag = await connection.query(`INSERT INTO todo (name) VALUES (?)`, [req]);
    return flag;
}
const updateTodoApp = async(req) => {
    // let name = req.body.name;
    // let id = req.body.id;
    let { name, id } = req.body
    console.log(id, name);
    const [result, error] = await connection.query(`UPDATE todo SET name = (?) WHERE id = ?`, [name, id]);
    return result;
}
const getById = async(req) => {
    let id = req;
    let todo = [];
    console.log(id);
    const [result, error] = await connection.query(`SELECT * FROM todo WHERE id = ?`, [id]);
    todo = result;
    return todo;
}
const deleteTodoApp = async(req) => {
    let id = req
    const flag = await connection.query(`DELETE FROM todo WHERE id = ?`, [id]);
    return flag;
}
module.exports = { getListTodoApp, addTodoApp, getById, updateTodoApp, deleteTodoApp }