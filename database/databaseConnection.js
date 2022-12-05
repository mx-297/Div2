const mysql2=require('mysql2');

const q=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sw_project'
})
module.exports=q;