const {Router} = require('express')
const { post, getpost, home, getblog, dlt } = require('../controllers/blog.controller')
const { createauth, roleauth } = require('../middleware/blog.middleware')
const blog = Router()

blog.get('/',home)
blog.get('/blogs',getblog)
blog.get('/create',roleauth,getpost)
blog.post('/create',createauth,post)
blog.delete('/delete/:id',dlt)

module.exports= {blog}