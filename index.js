const express = require('express');

const { logger, myBodyParser } = require('./middleware');
const { userApp } = require('./routes/user')
const { todoItemApp } = require('./routes/todoitem')

// initial app
const app = express();

// custom body parser middleware
app.use(myBodyParser)
app.use(logger)

// routes!
app.use('/user', userApp);

// TODOLIST ITEMS
app.use('/todoitem', todoItemApp);

app.use((req, res) => {
    res.status(404)
    res.json({"message": "path not found!"})
})

app.listen(3000, () => {
    console.log('now listening to...port: ', 3000)
});
