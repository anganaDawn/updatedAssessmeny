var express=require('express');
var app=express();
var hotellist=require('./hoteldetails.json');

//show hotel list
app.get('/show',function(req,res){

    res.send(hotellist);
})

app.get('/HotelsByCity',function(req,res){
    var newhotelcity=[];
    city=req.query.city;
    var foundcity=0;
    for(const i in hotellist)
    {
    if(hotellist[i].city==city){
       newhotelcity.push(hotellist[i]);
       foundcity=1;
    }
    }
    if(foundcity==0)
    res.send("not found");
    res.send(newhotelcity)
    
    })


// show hotel details by type
app.get('/HotelsbyType',function(req,res){
    var newhotellist=[];
    type=req.query.type;
    var found=0;
    for(const i in hotellist)
    {
    if(hotellist[i].type==type){
       newhotellist.push(hotellist[i]);
       found=1;
    }
    }
    if(found==0)
    res.send("not found");
    res.send(newhotellist);
    
    })

//show hotel by cuisine

app.get('/HotelsByCuisine',function(req,res){
        var newhotelcuisine=[];
        cuisine=req.query.cuisine;
     
        hotellist.forEach((item) =>
            {
                for (const i in item.cuisine)
                {
                    if(cuisine == item.cuisine[i])
                    {
                        newhotelcuisine.push(item);
                    }
                }
            });
            res.send(newhotelcuisine);
        })

        app.listen('3003',function (){
            console.log('Server listening to port 3003')
        })

