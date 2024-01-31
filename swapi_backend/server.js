var express = require('express');

var {MongoClient} = require('mongodb');

var app = express();
app.use(express.json());

const port = 5000;

const url = "mongodb://127.0.01:27017"


app.listen(port);

//*

//*/


async function getAllPlanets(){
    try{
        const collection = db.collection('planet');
        const planets = await collection.find().toArray();
       
    } catch (e){
        console.error(e);
    }
}


app.get("/api/planets" , async  (req,res) =>{
    //retrieve planets from db
    try{
        console.log("hello");
        const client = await MongoClient.connect(url);
        console.log("1");
        const db = client.db('swapi');
        console.log("2");
        const collection = db.collection('planets');
        console.log("3");
        const planets = await collection.find().toArray();
        client.close();
    }catch (error){
        console.error(error);
    }
    
});
