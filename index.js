const express = require('express');

const { logger, myBodyParser } = require('./middleware');
const UserService = require('./services/user');
const {userApp} = require('./routes/user')

// initial app
const app = express();

// custom body parser middleware
app.use(myBodyParser)
app.use(logger)

// routes!
app.use('/user', userApp);

// TODOLIST ITEMS
app.post('/todoitem', (req, res) => {
    res.json({})
});

app.get('/todoitem/:id', (req, res) => {
    res.json({})
});

app.put('/todoitem/:id', (req, res) => {
    res.json({})
});

app.delete('/todoitem/:id', (req, res) => {
    res.json({})

})



app.listen(3000, () => {
    console.log('now listening to...port: ', 3000)
});
