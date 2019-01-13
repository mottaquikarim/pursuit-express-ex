const express = require('express');
const todoItemRouter = express.Router();

todoItemRouter.post('/', (req, res) => {
    res.json({})
});

todoItemRouter.get('/:id', (req, res) => {
    res.json({})
});

todoItemRouter.put('/:id', (req, res) => {
    res.json({})
});

todoItemRouter.delete('/:id', (req, res) => {
    res.json({})

})

module.exports = {
    todoItemApp: todoItemRouter,
}