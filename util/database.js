
const uri = "mongodb+srv://admin:admin@sandbox.rxptd.mongodb.net/cosmere?retryWrites=true&w=majority";

const mongoose = require('mongoose');


async function connection(){
    return await mongoose.connect(uri);
}

exports.connection = connection
