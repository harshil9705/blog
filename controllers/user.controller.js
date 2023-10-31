const { user } = require("../models/user.schema")

const getsignup = (req,res)=>{
    res.render('signup')
}

const signup = async(req,res)=>{
    
    try {
        const data = await user.findOne({email : req.body.email})
        if(data){
            return res.send(`your account ${req.body.username} already exist`)
        }
        else{
            await user.create(req.body)
            return res.cookie('role',req.body.roal).cookie('id',req.body.id).send(`Account created successfully ${req.body.username}`)
        }
    } catch (error) {
        res.send(error.message)
    }
}

const a = (req,res)=>{
    console.log(req.cookies);
    res.send('hii')
}
module.exports = {signup,getsignup,a}
