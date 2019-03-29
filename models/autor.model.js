const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AutorSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100}
});

// Export the model
module.exports = mongoose.model('Autor', AutorSchema);