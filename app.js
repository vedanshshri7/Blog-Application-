const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const userRoute = require('../Blog Application/routes/user')



const catRoute = require('../Blog Application/routes/category')
const blogRoute = require('../Blog Application/routes/blog')
const commentRoute = require('../Blog Application/routes/comment')

mongoose.connect('mongodb+srv://Vedansh7:VedanshVedansh@blogapplication.nddynln.mongodb.net/?retryWrites=true&w=majority&appName=BlogApplication')
.then(res=>{console.log('Connected to Database')})
.catch(res=>{console.log(err)})

app.use(bodyParser.json())

app.use('/user',userRoute)
app.use('/category',catRoute)
 app.use('/blog',blogRoute)
app.use('/comment',commentRoute)


app.use('*',(req,res)=>{
  res.status(404).json({
    msg:'Test in Postman(or any API Platform)'
  })
})
module.exports = app