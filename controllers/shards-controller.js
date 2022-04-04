const Shard = require('../data/models/Shard').Shard

exports.getShards = async (req, res, next) => {
    let query = req.query;
    console.log(Object.keys(query));
    console.log(query)
    if (!Object.keys(query).length) {
        res.status(200).json(await Shard.find())
    }
    
    //if we want to performe a query search
    if (!Object.keys(query).includes('name')) {
        res.status(402).json({ error: "Search only includes name parameters" })
    }
    let parsedName = query.name[0].toUpperCase() + query.name.substring(1);
    let coincidences = await Shard.find({ name: parsedName }); 
    res.status(402).json(coincidences)
        
}


exports.postShard = () => { }


exports.postMultipleShards = async (req, res, next) => {
    //recuperamos un json
    console.log(req.body)
    
    await Shard.insertMany(req.body).catch(() => {
        res.status(400).json({ error: "An error has ocurred" })
    });
    res.status(200).json({ status: "The insertion has been completed successfully" });

}