const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ // comando pra criar um novo Schema
    name: String,
    age: Number
})

// feito o Schema, se cria agr o Model pra esse Schema:
//        Nome da collection
module.exports = mongoose.model('User', UserSchema);