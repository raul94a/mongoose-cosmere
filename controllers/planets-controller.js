const { Book } = require('../data/models/Book');

const Planet = require('../data/models/Planet').Planet
exports.getPlanet = (async (req, res, next) => {
    let planetName = req.params.planet;
    planetName = planetName[0].toUpperCase() + planetName.substring(1);
   
    const planet = await Planet.find({ name: planetName }).select('-__v').populate('shards', 'name vessel status -_id').populate({
        path: 'books',
        select: 'name saga characters -_id',
        populate: {
            path: 'characters',
            model: 'Character',
            select: 'name faction powers deceased invested investitureName -_id'
        }
    })
    res.json(planet);
})

exports.getPlanets = async (req, res, next) => {
    //en el schema de Planets hay un array de shards, referenciados por su id de mongo. En vez de mostrar el ObjectId de dicho
    //documento, voy a hacer que se muestren sus datos.
    //Dentro de populate definimos los campos que queremos mostrar (u ocultar con el - delante en el caso del id)
    const planets = await Planet.find()
        .select('-__v')
        .populate('shards', 'name vessel status -_id')
        //subpopulation
        .populate({
            path: 'books',
            select: 'name saga characters -_id',
            populate: {
                path: 'characters',
                select: 'name invested investitureName deceased faction powers -_id',
                //debemos referenciar al modelo del documento que se quiere rellenar con populate
                //para que mongoose sepa qué hacer
                model: 'Character'
            }
        })

    res.json(planets);


}



exports.postPlanet = async (req, res, next) => {
    const body = req.body;
    console.table(body.shards);
    await Planet.create(body).catch(err => console.log(err));
}

exports.update = async (req, res, next) => {
    let planet = 'Scadrial';
    const books = (await Book.find()).map(e => e._id);
    console.log(await Planet.updateOne({ name: planet }, { books: books }, { returnDocument: true }));
}