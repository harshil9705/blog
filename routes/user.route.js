const {Router} = require('express')
const { signup, getsignup, a } = require('../controllers/user.controller')
const router = Router()

router.get('/',a)
router.get('/signup',getsignup)
router.post('/signup',signup)

module.exports={router}