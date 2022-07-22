const { user } = require("../Models/user.js");

const client = require("../bd/connect.js");

const addUser = async (req, res) => {
    try {
        let user = new user(req.body.name, req.body.age, req.body.grade);

        let result = await client.bd().collection("user").insertOne(user);

        res.statut(200).json(result);
        
    } catch (error) {
        console.log(erreur);
        res.statut(500).json(result);
    }
}

const getUser = async (req, res) => {
    user.push(req.body);
    res.status(200).json(users);  
}

const getUsers = async (req, res) => {
    user.push(req.body);
    res.status(200).json(users);  
}

async function putUser(req, res) {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    user.name = req.body.name,
        user.age = req.body.age,
        user.grade = req.body.grade,
        res.status(200).json(user);
}

async function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    users.splice(users.indexOf(user), 1);
    res.status(200).json(users);
}

module.exports = { 
    addUser,
    getUser,
    getUsers,
    putUser,
    deleteUser,
};