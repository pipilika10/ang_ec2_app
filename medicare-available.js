

var medicare=[]

app.get("/",function(req,res){
    res.status(200);
    res.send("You have added these medicines/services");
    res.end();
})

app.post("/medicare",function(req,res){
    var med=req.body;
    console.log(med);
    medicare.push(med);
    res.send("Medicines/services added to Bag");
})
