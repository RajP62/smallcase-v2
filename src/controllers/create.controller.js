const express = require('express');
const router = express.Router();

router.get("",async(req,res)=>{
    try {
        return res.render("create",{message:"Success"});
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
})


module.exports = router;