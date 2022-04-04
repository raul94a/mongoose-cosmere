const Character = require('../data/models/Character').Character
exports.getAll = async (req, res, next) => {
    res.status(200).json(await Character.find());
}

exports.createCharacter = async (req, res, next) => {
    const body = req.body;


    await Character.create({
        ...body
    }).then(res => console.log(res));
}