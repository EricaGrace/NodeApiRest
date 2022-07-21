// create a server 
const express = require('express');
const app = express();
const users = require('./users.json');

app.use(express.json())

//create a get request
app.get('/users', function(req, res) {
res.status(200).json(users)
});

//create a get/id request
app.get('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.status(200).json(user)
});

//create a post request
app.post('/users', (req,res) => {
    users.push(req.body)
    res.status(200).json(users)
});

//create a put request
app.put('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.name =req.body.name,
    user.age =req.body.age,
    user.grade =req.body.grade,
    res.status(200).json(user)
})

//Define the port to listen 
app.listen(8080, () => {
console.log('server')
});

