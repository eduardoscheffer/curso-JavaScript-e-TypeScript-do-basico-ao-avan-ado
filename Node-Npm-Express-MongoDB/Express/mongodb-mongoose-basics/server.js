require('dotenv').config(); // importa a library dotenv pro projeto
const mongoose = require('mongoose') // importa a library mongoose pro projeto
const User = require('./User'); // importa o Model


connectDB()
async function connectDB () {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING); // conecta ao MongoDB
        console.log('Connected'); // printa a mensagem quando for connectado com sucesso
    } catch (error) {
        console.log(error)
    }
};


run()
async function run() {
    
    const user = new User({ name: 'Mariana', age: 26 }); // cria o novo User e salva localmente na variavel user

    await user.save(); // salva na database
    console.log('Saved');
}