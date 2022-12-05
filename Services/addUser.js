const router=require('express').Router();
const q=require('../database/databaseConnection');

router.post('/addUser',(req,res)=>{
    const {Name,Phone_Number,Location,Category,} =req.body
    q.execute(`INSERT into sany3ii (Name,Phone_Number,Location,Category) VALUES ('${Name}','${Phone_Number}','${Location}','${Category}')`);
    res.send({message:'success'});

})

module.exports=router;