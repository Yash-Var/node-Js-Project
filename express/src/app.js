const express =require('express');
const app=express(); 
const port=process.env.PORT || 4000;

app.get("",(req,res)=>{
    res.send("welcome to first project of express");
});
app.get("/about",(req,res)=>{
    res.send("welcome to first project about page of express");
});
app.get("*",(req,res)=>{
    res.send("404 error page");
});

app.listen(port,()=>{
 console.log(`listening to ${port}`);
});