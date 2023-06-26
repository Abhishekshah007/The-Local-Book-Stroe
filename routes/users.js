const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Challenge yourself
router.get('/cool',(req,res,next)=>{
  res.send("Your'e so cool !!!")
})
module.exports = router;
