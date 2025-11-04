const elementoForms = document.querySelector('.block-nova-transacao form'); //Formulario HTML
elementoForms.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoForms.checkValidity()) { //Verifica se todos so campos do formularios estão preenchido
        alert('Por gentileza preencha todos os campos!');
        return;
    }
    const tipoTransacao = document.querySelector('#tipoTransacao'); //Deixa explicito que a variavel é um HTMLSelectElement 
    const valorTransacao = document.querySelector('#valor'); //Deixa explicito que a variavel é um HTMLInputElement 
    const dataTransacao = document.querySelector('#data'); //Deixa explicito que a variavel é um HTMLDataElement 
    const tipo = tipoTransacao.value;
    const valor = valorTransacao.valueAsNumber;
    const data = new Date(dataTransacao.value);
    if (tipo == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipo == TipoTransacao.TRANSFERENCIA || tipo == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert('Valor invalido!');
        return;
    }
    elemetoSaldo.innerHTML = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipo,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoForms.reset();
});
