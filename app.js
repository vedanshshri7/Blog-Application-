const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const userRoute = require('./routes/user')



const catRoute = require('./routes/category')
const blogRoute = require('./routes/blog')
const commentRoute = require('./routes/comment')

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