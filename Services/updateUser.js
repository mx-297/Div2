const router=require('express').Router();
const q=require('../database/databaseConnection');

router.put('/updateUser',(req,res)=>
{
    const {id,Name,Phone_Number,Location,Category}=req.body;
    q.execute(`UPDATE sany3ii SET Name ='${Name}', Phone_Number='${Phone_Number}', Location='${Location}',Category='${Category}' where id='${id}'`);
    res.send({message:'success'});
})
module.exports=router;