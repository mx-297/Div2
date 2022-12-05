const router=require('express').Router();
const q=require('../database/databaseConnection');

router.delete('/deleteUser',(req,res)=>{
    const {id}=req.body;
    q.execute(`delete from sany3ii where id='${id}'`);
    res.send({message:'success'});
})

module.exports=router;