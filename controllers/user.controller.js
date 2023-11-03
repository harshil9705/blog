const { user } = require("../models/user.schema")

const getsignup = (req,res)=>{
    res.render('signup')
}

const getlogin = (req,res)=>{
    res.render('login')
}

const signup = async(req,res)=>{
    
    try {
        let data = await user.findOne({email : req.body.email})
        if(!data){ 
            res.send({username:data.username})
            // return res.send({username:data.username})
        }
        else{
            const data = await user.create(req.body)
            

            
            return res.cookie('role',data.role).cookie('id',data.id).send(`Account created successfully ${data.username}`)
        }
    } catch (error) {
        res.send(error.message)
    }
}

const login = async(req,res)=>{
    try {
        let data = await user.findOne({email : req.body.email})
        if(!data){
            return res.send('Invalid Credentials.')
        }
        if(data.password != req.body.password){
            return res.send('Invalid Credentials.')
        }
        else{
            return res.cookie('id',data.id).cookie('role',data.role).cookie('author',data.username).send(`<h1>Welcome User ${data.username}</h1>`)
        }
    } catch (error) {
        if(error){
            res.send(error)
        }
    }
}

module.exports = {signup,getsignup,getlogin,login}
