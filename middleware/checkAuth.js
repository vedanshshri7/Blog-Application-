
const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
// console.log('from checkAuth',req.headers.authorization)
try{
    const token = req.headers.authorization.split(" ")[1]
   const verify = jwt.verify(token,'ved 147')
   if(verify){
    next();
   }
}
catch(err){
  return res.status(401).json({
    msg:'invalid user token'
  })
}



}