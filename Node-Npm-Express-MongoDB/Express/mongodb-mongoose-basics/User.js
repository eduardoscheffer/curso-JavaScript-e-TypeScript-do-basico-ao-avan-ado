const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ // comando pra criar um novo Schema
    name: String, // key: typeof the key
    age: {
        type: Number,
        min: 1,
        max: 120
    },
    email: {
        type: String,
        required: true,
        lowercase: true,

    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        
    },
    updatedAt: Date,
    // bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String, 
    }
})

// feito o Schema, se cria agr o Model pra esse Schema:
//                      Nome da collection
module.exports = mongoose.model('User', UserSchema);