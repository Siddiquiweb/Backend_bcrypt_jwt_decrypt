
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app .get("/",function (req, res){
    let token =jwt.sign({email:"siddiquiweb970@gmail.com"},"secret"  )
    res.cookie("token",token)
res .send("Hello World!")
})

    app.get("/read", function(req,res){
       let data = jwt.verify(req .cookies .token,"secret");
       console.log(data)

    } )


app.listen (3000);