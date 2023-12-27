const express = require("express");
const bodyParser=require('body-parser')
const multer=require("multer")
const signuproute=require("./routes/signup")
const signinroute=require("./routes/signin")
const postRoutes = require("./routes/posts")
const jwt = require("jsonwebtoken");
const secret = 'RESTAPI'
const User = require("./models/userSchema");
const cors=require("cors")
const app=express();
app.use(bodyParser.json());
app.use(cors())
app.use("/posts", (req, res, next) => {
    console.log(req.headers.authorization)
    if (req.headers.authorization) {
        const token = req.headers.authorization.split("test ")[1]

        jwt.verify(token, secret, async function (err, decoded) {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: "not Authenticated"
                })
            }
            console.log(err, decoded)
            const user1 = await User.findOne({ _id: decoded.user });
            req.user = user1._id;
            next();

        });

    } else {
        return res.status(500).json({
            status: "failed",
            message: "invalid token"
        })

    }
})
app.use("/signup",signuproute)  // http://localhost:8000/signup/register
app.use("/signin",signinroute)  //http://localhost:8000/signin/login
app.use("/posts",postRoutes)  // http://localhost:8000/posts/

const port=8000;
app.listen(port,()=>{
    console.log("server start at port 8000")
})
