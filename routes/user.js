const express = require('express');
const userRouter = express.Router();
const User = require('../models/C3User');
const loggedin = require("../services/middleware");
// READ
userRouter.get('/',(req, res) => {
    //id = String(id);
    
    /*
    const user = req.session.passport.user;
    var nameid;
    if (user.googleid)
        nameid = "g_" + user._id;
    else
        nameid = "l_" + user._id;
    */
    
    var nameid = "l_1";

    User.findOne({"name_id":nameid}, (err, response) => {
        if (err) res.status(500).json({
            message : "Unable to get"
        })
        else {
            console.log(req.query.id);
            res.status(200).json({response})
        }
    })
})

// POST

userRouter.post('/', (req, res) => {
    const user = new User(req.body);
    user.save((err, response) => {
        if (err) res.status(500).json({
            message : "Unable to add data"
        })
        else res.status(200).json({
            message : "added"
        })
    })
})

// UPDATE 

userRouter.put('/', loggedin, (req, res) => {
    
    /*
    const user = req.session.passport.user;
    var nameid;
    if (user.googleid)
        nameid = "g_" + user._id;
    else
        nameid = "l_" + user._id;
    */
    
   var nameid = "l_1";

    User.updateOne({"name_id":nameid}, req.body, {runValidators : true}, (err, response) => {
        if(err) {
            console.error(err);
            res.status(500).json({message:{
                msgBody : "Unable to Update User",
                msgError : true
            }});
        }
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated User",
            msgError : false
        }});   
    })
})
module.exports = userRouter;