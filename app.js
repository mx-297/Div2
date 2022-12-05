const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());

app.use(express.json());



app.use(require('./Services/addUser'));
app.use(require('./Services/allUsers'));
app.use(require('./Services/updateUser'));
app.use(require('./Services/deleteUser'));






app.listen(3000,()=>{
    console.log("server is running")
})

