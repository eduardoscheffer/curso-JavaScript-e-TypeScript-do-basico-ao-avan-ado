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
    
    try {

        // const user = new User({ name: 'Mariana', age: 26 }); // cria o novo User e salva localmente na variavel user
        // await user.save(); // salva na database
        /*
        ---- UTILIZANDO O MESMO MÉTODO DE CIMA MAS o metodo .create() cria e já salva automaticamente, não sendo necessário fazer o user.save():
        const user = User.create({
            name: 'Mariana',
            age: 26,
            email: teste@teste.com.br,
            hobbies: ["Musculação", "Corrida"],
            address: {street: "Main St", city: "Tc"}
        })
        */

        // console.log('Saved'); // printa a mensagem assim que o documento for salvo na db
        // const findMari = await User.where('name').equals('Mariana');
        // console.log(findMari);
        /*
        [
            {
                hobbies: [],
                _id: new ObjectId("647273c76168018c1e212145"),
                name: 'Mariana',
                age: 26,
                __v: 0,
                createdAt: 2023-05-28T22:13:33.867Z
            }
        ]
        */

        // const everythinInMongo = await User.find(); // tras todos os documentos que tem na collection users(User)
        // console.log(everythinInMongo);

    } catch (e) {
        console.log(e.message);
    }
}