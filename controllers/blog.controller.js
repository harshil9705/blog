
const { blog } = require("../models/blog.schema")

// get

const home = (req,res)=>{
    res.render('home')
}

const getpost =(req,res)=>{
    res.render('addblog')
}

const getblog = async(req,res)=>{
   const data = await blog.find()
   res.send(data)
}

const single = async(req,res)=>{
    const {id} = req.params
    const singleBlog = await blog.findById(id);
    res.render('singleBlogPage',{singleBlog})
}

// post

const post = async(req,res)=>{
    const {title,content,image,category}=req.body
    const addblog = {
        title:title,
        content:content,
        image:image,
        author:req.cookies.author,
        category:category
    }
    const data = await blog.create(addblog)
    return res.cookie('blogId',data).send(`blog created by ${req.cookies.author}`)
}

// delete
const dlt = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await blog.findByIdAndDelete(id)
        if(data){
            const data = await blog.find()
            return res.send({blog:data})
        }
        else{
            return res.send({message:"blog is not available"})
        }
    } catch (error) {
        return res.send({error:error})
    }
}

// patch
const edit = async(req,res)=>{
    try {
        const {id} = req.params

    const data = await blog.findByIdAndUpdate( id,req.body)
    if(data){
    }
    else{
        return res.send({message:"blog is not available"})
    }
    } catch (error) {
        return res.send({error:error})
    }
} 

// filter

const filter = async(req,res)=>{
    try {
        const {category} = req.query
        const obj = {}
        if(category){
            obj.category = category
        }
        const data = await blog.find(obj)
        console.log(data);
        return res.send( data)
    } catch (error) {
        return res.send({error:error})
    }
}

const like = async(req,res)=>{
    // let {id} =req.params
    let {username} = req.cookies.author
    const data = await blog.findByIdAndUpdate(id,{username:username})
    // let username = req.cookies.author
    console.log(data.likedBy);
    // res.send({usernmae :username})
    return res.send({user:"che"})
    // if(data){

    // }
}



module.exports = {post,getpost,home,getblog,dlt, edit,single,filter,like}