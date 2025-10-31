let saldo = 3000;

let elemetoSaldo = document.querySelector('.cc .valor') as HTMLElement; //Elemento HTML

if(elemetoSaldo){
    elemetoSaldo.textContent = saldo.toString();
}

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

    const tipo: string = tipoTransacao.value
    const valor: number = valorTransacao.valueAsNumber
    const data: Date = new Date(dataTransacao.value)


    if(tipo == 'Depósito'){
        saldo += valor;
    }else if(tipo == 'Transferência' || tipo == 'Pagamento de Boleto'){
        saldo -= valor;
    }else{
        alert('Valor invalido!');
        return;
    }

    elemetoSaldo.innerHTML = saldo.toString();


    const novaTransacao = { //Criando um objeto para armazenar os dados
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao
    };

    console.log(novaTransacao);
    elementoForms.reset();
})

export {};


