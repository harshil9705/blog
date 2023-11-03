const {Router} = require('express')
const { post, getpost, home, getblog, dlt, edit,  single, like } = require('../controllers/blog.controller')
const { createauth, roleauth, userauth } = require('../middleware/blog.middleware')
const blog = Router()

blog.get('/',home)

blog.get('/blogs',getblog)

blog.get('/create',roleauth,getpost)

blog.get('/singleBlog/:id',single)

blog.post('/create',createauth,post)

blog.delete('/delete/:id',dlt)

blog.patch('/edit/:id',edit)

blog.patch('/like/:id',userauth,like)

module.exports= {blog}