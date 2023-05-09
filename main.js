const form = document.getElementById("form-contatos");
const contato = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLinha();
    atualizaAgenda();

});

function addLinha() {
    const inputContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-telefone');

    if (contato.includes(inputContato.value)) {
        alert(`O contato ${inputContato.value} já foi inserido na agenda`)
    }
    else {
        contato.push(inputContato.value);
        telefone.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td> ${inputContato.value} </td>`;
        linha += `<td> ${inputTelefone.value} </td>`;
        linha += '</tr>';

        linhas += linha; 

        inputContato.value = '';
        inputTelefone.value = '';
    }
}

function atualizaAgenda () {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas; 
}