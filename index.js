const database = require('./db');

window.onload = function() {

  // Populate the table
  preenchendoTabela();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');

    // Save the person in the database
    database.addPessoa(nome.value, sobrenome.value);

    // Reset the input fields
    nome.value = '';
    sobrenome.value = '';

    // Repopulate the table
    preenchendoTabela();
  });
}

// Populates the persons table
function preenchendoTabela() {
  // Retrieve the persons
  database.getPessoa(function(pessoa) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < pessoa.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + pessoa[i].nome + '</td>';
      tableBody += '  <td>' + pessoa[i].sobrenome + '</td>';
      tableBody += '  <td><input class="botao" type="button" value="Apagar" onclick="delPessoa(\'' + pessoa[i]._id + '\')"></td>'
      tableBody += '  <td><input class="botao" type="button" value="Atualizar" onclick="updatePessoa(\'' + pessoa[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function delPessoa(id) {

  // Delete the person from the database
  database.deletePessoa(id);

  // Repopulate the table
  preenchendoTabela();
}

// Atualizando
function updatePessoa(id) {
  
  // Enviando para o back para atualização
  database.updtPessoa(id);
  //Passando o Id para outra função tambem...
  alterar(id);
}

function alterar(id){
  //Salvando as alterações
  document.getElementById('update').addEventListener('click', () => {
    
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    
    database.alterarPessoa(id);

    nome.value = '';
    sobrenome.value = '';
    
    document.location.reload();
    
    //Atualizando tabela
    preenchendoTabela();
  });
  
  
}