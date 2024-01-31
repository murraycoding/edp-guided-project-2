var express = require('express');

var { MongoClient } = require('mongodb');

var app = express();
app.use(express.json());

const port = 5000;

const url = "mongodb://127.0.0.1:27017"


app.listen(port);

//*

//*/




app.get("/api/planets", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/planets
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('planets');
        const planets = await collection.find().toArray();
        client.close();
        res.json(planets);
    } catch (error) {
        console.error(error);
    }
});



app.get("/api/films", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films');
        const films = await collection.find().toArray();
        client.close();
        res.json(films);
    } catch (error) {
        console.error(error);
    }
});

app.get("/api/characters/:id", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    console.log("in character id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('characters');
        const characters = await collection.findOne({ 'id': +id });
        console.log(characters);
        client.close();
        if (characters) {
            res.json(characters);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});

app.get("/api/characters", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/planets

    console.log("in characters");
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('characters');
        const characters = await collection.find().toArray();
        client.close();
        res.json(characters);
    } catch (error) {
        console.error(error);
    }
});


app.get("/api/films/:id", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    console.log("in films id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films');
        const films = await collection.findOne({ 'id': +id });
        console.log(films);
        client.close();
        if (films) {
            res.json(films);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});




app.get("/api/planets/:id", async (req, res) => {
    //retrieve planets from db
    // curl http://localhost:5000/api/films
    console.log("in planets id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('planets');
        const planets = await collection.findOne({ 'id': +id });
        console.log(planets);
        client.close();
        if (planets) {
            res.json(planets);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});

app.get("/api/characters/:id/films", async (req, res) => {
    //retrieve planets from db 
    // curl http://localhost:5000/api/films 
    console.log("in planets id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films_characters');
        const planets = await collection.find({ 'character_id': +id }).toArray();
        //const films = planets[0].film_id;
        await client.close();

        const client1 = await MongoClient.connect(url);
        const db1 = client1.db('swapi');
        const film_collection = db1.collection("films");

        const films = await Promise.all(planets.map(
            (planet) => film_collection.findOne({ "id": +planet.film_id }) 

        ));
        client.close();
        if (films) {
            res.json(films);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});




app.get("/api/planets/:id/films", async (req, res) => {
    //retrieve planets from db 
    // curl http://localhost:5000/api/films 
    console.log("in planets id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films_planets');
        const planets = await collection.find({ 'planet_id': +id }).toArray();
        //const films = planets[0].film_id;
        await client.close();

        const client1 = await MongoClient.connect(url);
        const db1 = client1.db('swapi');
        const film_collection = db1.collection("films");

        const films = await Promise.all(planets.map(
            (planet) => film_collection.findOne({ "id": +planet.film_id }) 

        ));
        client.close();
        if (films) {
            res.json(films);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});


app.get("/api/films/:id/planets", async (req, res) => {
    //retrieve planets from db 
    // curl http://localhost:5000/api/films 
    console.log("in planets id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films_planets');
        const films = await collection.find({ 'film_id': +id }).toArray();
        //const films = planets[0].film_id;
        await client.close();

        const client1 = await MongoClient.connect(url);
        const db1 = client1.db('swapi');
        const planets_collection = db1.collection("planets");

        const planets = await Promise.all(films.map(
            (film) => planets_collection.findOne({ "id": +film.planet_id }) 

        ));

        console.log(planets)
        client.close();
        if (planets ) {
            res.json(planets);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});


app.get("/api/films/:id/characters", async (req, res) => {
    //retrieve planets from db 
    // curl http://localhost:5000/api/films 
    console.log("in planets id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection = db.collection('films_characters');
        const films = await collection.find({ 'film_id': +id }).toArray();
        //const films = planets[0].film_id;
        await client.close();

        const client1 = await MongoClient.connect(url);
        const db1 = client1.db('swapi');
        const characters_collection = db1.collection("characters");

        const characters = await Promise.all(films.map(
            (film) => characters_collection.findOne({ "id": +film.character_id }) 

        ));

        console.log(characters)
        client.close();
        if (characters ) {
            res.json(characters);
        } else {
            res.status(404);
        }

    } catch (error) {
        console.error(error);
    }
});

app.get("/api/planets/:id/characters", async (req, res) => {
    //retrieve planets from db 
    // curl http://localhost:5000/api/films 
    console.log("in planets character id");
    const id = req.params.id;
    console.log(id);
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('swapi');
        const collection_c = db.collection('characters'); 
        const characters = await collection_c.find({"homeworld": +id}).toArray(); 
        console.log(characters);
        
        res.json(characters);
        client.close();
    }catch (e){
        console.error(e)
    }
});