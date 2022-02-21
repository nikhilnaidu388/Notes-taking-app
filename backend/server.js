const express = require('express');
// const dotenv = require('dotenv')
const Notes = require('./data/Notes');

const app=express();

// dotenv.config();

// app.use(express.json())

app.get('/',(req,res)=>{
    res.send("get request is running");
});

app.get('/api',(req,res)=>{
    res.json(Notes);
});

       
app.get("/api/:category",(req,res)=>{
    let Note = Notes.filter((ele)=>{return ele.category==req.params.category})
    res.json(Note);

});

app.listen(5000)
// const PORT = process.env.PORT || 5000;
// app.listen(5000, console.log(`app is running at port ${PORT}`));