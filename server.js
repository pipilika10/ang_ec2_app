const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ang_ec2")
.then(()=>{
    console.log("Dtabase Connection Done")
}).catch(()=>{
    console.log("Something Went Wrong")
})

const bodyParser=require("body-parser");


app.use(bodyParser.json());

app.get("/src/app-user-signup",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app/user_signup",{title:'userDetails',records:data})
    })
});

app.post('/src/app-user-signup',async(req,res)=>{

    const data=new userDetails(req.body)
    await data.save()
    res.send("Save Data");
})

app.post("/src/app-signin",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app-signin",{title:'userDetails',records:data})
    })
});

app.get("/src/app-admin-dashboard",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app/admin-dashboard",{title:'availableMedicines',records:data})
    })
});

app.post('/src/app-admin-dashboard',async(req,res)=>{

    const data=new availableMedicines(req.body)
    await data.save()
    res.send("Save Data");
})

app.get("/src/app-admin-dashboard",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app/admin-dashboard",{title:'availableMedicines',records:data})
    })
});

app.post('/src/app-admin-dashboard',async(req,res)=>{

    const data=new availableMedicines(req.body)
    await data.save()
    res.send("Save Data");
})

app.get("/src/app-admin-dashboard",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app/admin-dashboard",{title:'medPros',records:data})
    })
});

app.post('/src/app-admin-dashboard',async(req,res)=>{

    const data=new medPros(req.body)
    await data.save()
    res.send("Save Data");
})

app.get("/src/app-orders",function(req,res,next){
    users.exec(function(err,data){
        if(err)throw err;
        res.render("src/app/admin-dashboard",{title:'userOrderDetails',records:data})
    })
});

app.post('/src/app-orders',async(req,res)=>{

    const data=new userOrderDetails(req.body)
    await data.save()
    res.send("Save Data");
})


app.listen(8080,()=>{
    console.log("http://localhost:8080");
})