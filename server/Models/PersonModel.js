const moongose = require('mongoose');
const Schema = moongose.Schema;

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    date: { type: Date,requiredd:true, default: Date.now() }
});

const personModel=moongose.model('person',personSchema)
module.exports=personModel;