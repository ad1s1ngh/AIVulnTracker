const express = require("express");

const app = express();

app.use(express.static("public"));

app.use(express.json());

const user = {

    username: "admin",

    password: "1234"

};

app.post("/login",(req,res)=>{

    const {username,password}=req.body;

    if(username===user.username && password===user.password){

        res.json({

            success:true

        });

    }

    else{

        res.json({

            success:false,

            message:"Invalid Username or Password"

        });

    }

});

app.listen(3000,()=>{

    console.log("Server running on http://localhost:3000");

});