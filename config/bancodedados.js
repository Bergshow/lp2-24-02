const mongoose = require('mongoose')

const conexao = async()=>{
    var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
}

const modelo = mongoose.Schema({
    rm:String,
    nome:String,
    turma:String,
    idade:String
})

const alunos = mongoose.model('modelo',alunos)

module.exports = {conexao,alunos}