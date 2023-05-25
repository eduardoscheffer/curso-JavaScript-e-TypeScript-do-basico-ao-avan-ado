const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ // cria o novo Schema chamado HomeModel;
    titulo: { type: String, required: true },
    descricao: String
});

// cria agora o Model:     Nome do Model ,  Schema
const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel; // exporta o model (importa ele nos controllers)