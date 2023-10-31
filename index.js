const express = require('express')
const { connection } = require('./config/db')
const cookie = require('cookie-parser')
const { router } = require('./routes/user.route')
const { Blog } = require('./routes/blog.route')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static(__dirname +'/public'))

app.use('/user',router)
app.use('/blog',Blog)
app.listen(8090,()=>{
    console.log('http://localhost:8090');
    connection()
})