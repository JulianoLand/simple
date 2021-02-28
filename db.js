// Iniciando Banco de dados
var Datastore = require('nedb');
db = new Datastore({ filename: 'base/persons.db', autoload: true });

// Adicionando pessoas
exports.addPessoa = function(nome, sobrenome) {

  // Create
  var pessoa = {
    "nome": nome,
    "sobrenome": sobrenome
  };

  // Insert
  db.insert(pessoa, function(err, newDoc) {
    if(err)return console.log(err);
    console.log("Novo usuario adiconado!");
  });
};

// Retornando todas as pessoas
exports.getPessoa = function(fnc) {
  // Pegando todas as pessoas do banco de dados
  db.find({}, function(err, docs) { //1º Parametro (quem quer retornar) e o 2º abre uma função
    if(err)return console.log(err);
    fnc(docs);
  });
}

// Deletes a person
exports.deletePessoa = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    if(err)return console.log(err);
  });
}

//Jogando texto nas caixinhas para edição
exports.updtPessoa = function(id){
  db.findOne({ _id: id}, function (err, doc){
    if(err) return console.log(err);
    document.principal.nome.value = doc.nome;
    document.principal.sobrenome.value = doc.sobrenome;
  });
}

//Salvando a alteração realizada...
exports.alterarPessoa = function(id){
  db.update({ _id: id}, {nome: nome.value, sobrenome: sobrenome.value}, {}, function(err) {
    if(err)return console.log(err);
  });
}