const express = require('express')
const router = express.Router()
const Category = require('../model/Category')
const mongoose = require('mongoose')
const checkAuth = require('../middleware/checkAuth')

//add category

router.post('/',checkAuth,(req,res)=>{



const newCategory = new Category({
  _id: new mongoose.Types.ObjectId,
  userId:req.body.userId,
  title:req.body.title,
  imageUrl:req.body.imageUrl,

})
   newCategory.save()
   .then(result=>{
    res.status(200).json({
      newCategory:result
    })
   })
   .catch(err=>{
    console.log(err)
    res.status(500).json({
      error : err
    })
   })


})

/// get all Category



module.exports = router






