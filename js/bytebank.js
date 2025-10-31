var saldo = 3000;
var elemetoSaldo = document.querySelector('.cc .valor'); //Elemento HTML
if (elemetoSaldo) {
    elemetoSaldo.textContent = saldo.toString();
}
var elementoForms = document.querySelector('.block-nova-transacao form'); //Formulario HTML
elementoForms.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoForms.checkValidity()) { //Verifica se todos so campos do formularios estão preenchido
        alert('Por gentileza preencha todos os campos!');
        return;
    }
    var tipoTransacao = document.querySelector('#tipoTransacao'); //Deixa explicito que a variavel é um HTMLSelectElement 
    var valorTransacao = document.querySelector('#valor'); //Deixa explicito que a variavel é um HTMLInputElement 
    var dataTransacao = document.querySelector('#data'); //Deixa explicito que a variavel é um HTMLDataElement 
    var tipo = tipoTransacao.value;
    var valor = valorTransacao.valueAsNumber;
    var data = new Date(dataTransacao.value);
    if (tipo == 'Depósito') {
        saldo += valor;
    }
    else if (tipo == 'Transferência' || tipo == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Valor invalido!');
        return;
    }
    elemetoSaldo.innerHTML = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao
    };
    console.log(novaTransacao);
    elementoForms.reset();
});
