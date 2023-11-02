const { blog } = require("../models/blog.schema")


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

const post = async(req,res)=>{
    const {title,content,image,category}=req.body
    const addblog = {
        title:title,
        content:content,
        image:image,
        author:req.cookies.author,
        category:category
    }
    console.log(blog);
    const data = await blog.create(addblog)
    res.cookie('blogId',data).send(`blog created by ${req.cookies.author}`)
}

const dlt = async(req,res)=>{
    const {id} = req.params

    await blog.findByIdAndDelete(id)
    res.send('deleted')
}

module.exports = {post,getpost,home,getblog,dlt}