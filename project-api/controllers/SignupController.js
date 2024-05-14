const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1"); //>npm i sha1 in cmd and import it here

routes.post("/", async(req, res)=>{
    
    delete req.body.repassword; //As repassword does have any use at database therefore we have remove it from Schema and model , and have used this command here

    req.body.password = sha1(req.body.password); //encrpytion of password even from database using Sha1 module

    await User.create(req.body);
    res.send({ success : true }); //for <form> data we have to send something to server side for proper working therefore we have given {success : true} just as message, here message can be anything
})

module.exports = routes;