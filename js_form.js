//Função para o Button

function guardaFormulario() {
    
    var formsCliente = new Object();

    formsCliente.nome = document.getElementById('nome').value;
    formsCliente.sobrenome = document.getElementById('sobrenome').value;
    formsCliente.data = document.getElementById('data').value;
    formsCliente.cpf = document.getElementById('cpf').value;
    formsCliente.celular = document.getElementById('celular').value;
    formsCliente.email = document.getElementById('email').value;
    formsCliente.estado = document.getElementById('estado').value;
    formsCliente.pais = document.getElementById('pais').value;


//Converter para String Json

var jsonForm = JSON.stringify(formsCliente);

//Exibir

console.log(formsCliente.valueOf());

    document.getElementById('nome1').innerHTML = "<b>Nome: </b>" + formsCliente.nome;
    document.getElementById('sobrenome1').innerHTML = "<b>Sobrenome: </b>" + formsCliente.sobrenome;
    document.getElementById('data1').innerHTML = "<b>Data: </b>" + formsCliente.data;
    document.getElementById('cpf1').innerHTML = "<b>CPF: </b>" + formsCliente.cpf;
    document.getElementById('celular1').innerHTML = "<b>Celular: </b>" + formsCliente.celular;
    document.getElementById('email1').innerHTML = "<b>E-mail: </b>" + formsCliente.email;
    document.getElementById('estado1').innerHTML = "<b>Estado: </b>" + formsCliente.estado;
    document.getElementById('pais1').innerHTML = "<b>País: </b>" + formsCliente.pais;

    window.print();
}