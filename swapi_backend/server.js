var express = require('express');

var {MongoClient} = require('mongodb');

var app = express();
app.use(express.json());

const port = 5000;

const url = "mongodb://127.0.0.1:27017"


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
    // curl http://localhost:5000/api/planets
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
        res.json(planets);
    }catch (error){
        console.error(error);
    }
});

app.get("/api/planets" , async  (req,res) =>{
    //retrieve planets from db
    // curl http://localhost:5000/api/planets
    try{
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('planets');
        const planets = await collection.find().toArray();
        client.close();
        res.json(planets);
    }catch (error){
        console.error(error);
    }
});

app.get("/api/characters" , async  (req,res) =>{
    //retrieve planets from db
    // curl http://localhost:5000/api/planets
    try{
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('characters');
        const characters = await collection.find().toArray();
        client.close();
        res.json(characters);
    }catch (error){
        console.error(error);
    }
});

app.get("/api/films" , async  (req,res) =>{
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    try{
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films');
        const films = await collection.find().toArray();
        client.close();
        res.json(films);
    }catch (error){
        console.error(error);
    }
});

app.get("/api/characters/:id" , async  (req,res) =>{
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    console.log("in character id")
    const id = req.params.id;
    try{
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('characters');
        const characters = await collection.findOne({'id': id});
        console.log(characters);
        client.close();
        if(characters){
            res.json(characters);
        } else {
            res.status(404);
        }
        
    }catch (error){
        console.error(error);
    }
});