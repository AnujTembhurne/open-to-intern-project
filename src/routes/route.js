const express = require('express');
const router = express.Router();

router.get('/hello',function(req,res){
    res.send("hey")
})


module.exports = router;