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

    const singleBlog = await blog.findById(id)
    res.render('singleBlogPage',{blog : singleBlog})
}

// const getedit = async(req,res)=>{
//     res.render('patch')
// }

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
    console.log(blog);
    const data = await blog.create(addblog)
    return res.cookie('blogId',data).send(`blog created by ${req.cookies.author}`)
}

// delete
const dlt = async(req,res)=>{
    const {id} = req.params
    const {role} = req.cookies
    if(role == "admin"){
        console.log(id);
        await blog.findByIdAndDelete(id)
        return res.status(200).send('deleted')
    }
    else{
        res.send("already admin can access this page")
    }
}


const edit = async(req,res)=>{
    const {id} = req.params
    const {role} = req.cookies

    if(role == "admin"){
     await blog.findByIdAndUpdate(id,req.body)
    const data = await blog.find()
    return res.send(data)
    }
    else{
        res.send("only admin can access this page")
    }
    
}

const like = async(req,res)=>{
    res.send('like')
}



module.exports = {post,getpost,home,getblog,dlt,single,like,edit}