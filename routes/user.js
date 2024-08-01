const express = require('express')
const router = express.Router()

router.post('/signup',(req,res)=>{
    console.log('signup post request')

    console.log(req.body)
})

router.post('/login',(req,res)=>{
    console.log('Login post request')
})

module.exports = router;