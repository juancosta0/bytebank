
const elementoForms = document.querySelector('.block-nova-transacao form') as HTMLFormElement; //Formulario HTML

elementoForms.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!elementoForms.checkValidity()) { //Verifica se todos so campos do formularios estão preenchido
        alert('Por gentileza preencha todos os campos!');
        return;
    }

    const tipoTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement; //Deixa explicito que a variavel é um HTMLSelectElement 
    const valorTransacao = document.querySelector('#valor') as HTMLInputElement;  //Deixa explicito que a variavel é um HTMLInputElement 
    const dataTransacao = document.querySelector('#data') as HTMLDataElement; //Deixa explicito que a variavel é um HTMLDataElement 

    const tipo: TipoTransacao = tipoTransacao.value as TipoTransacao
    const valor: number = valorTransacao.valueAsNumber
    const data: Date = new Date(dataTransacao.value)



    if(tipo == TipoTransacao.DEPOSITO){
        saldo += valor;
    }else if(tipo == TipoTransacao.TRANSFERENCIA || tipo == TipoTransacao.PAGAMENTO_BOLETO){
        saldo -= valor;
    }else{
        alert('Valor invalido!');
        return;
    }

    elemetoSaldo.innerHTML = formatarMoeda(saldo);


    const novaTransacao: Transacao = { //Criando um objeto para armazenar os dados
        tipoTransacao: tipo,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoForms.reset();
})
