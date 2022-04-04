const connection = require('./util/database').connection;
const express = require('express');
const  charactersRouter  = require('./routes/characters-routes');
const app = express();
const planetRoutes = require('./routes/planet-routes');
const shardRoutes = require('./routes/shards-routes');
const booksRoutes = require('./routes/books-routes')



app.use(express.urlencoded({extended:false}))
//compulsory to set express.json() in order to listen to post request
//in fact, what the statement does is to set the bodyparser to JSON format
app.use(express.json());


app.use(shardRoutes.router);
app.use(planetRoutes.router);
app.use(charactersRouter.router);
app.use(booksRoutes.router);


async function init(){
    await connection();
    app.listen(3000);
}
init();