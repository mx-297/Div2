const router=require('express').Router();
const q=require('../database/databaseConnection');

router.get('/allUsers',(req,res)=>{
    q.execute(`SELECT * FROM sany3ii`,(error,result)=>{
        res.json({data:result});
    });
    
})

module.exports=router;