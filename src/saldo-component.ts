function formatarMoeda(variavel: number){
    return variavel.toLocaleString('pt-br', {currency: 'BRL', style: 'currency'}) //Define a formatação da moeda local
}

let saldo: number = 3000;

const elemetoSaldo = document.querySelector('.cc .valor') as HTMLElement; //Elemento HTML

const dataTime = document.querySelector('time') as HTMLElement;

let dataAtual: Date = new Date();

if(elemetoSaldo){
    elemetoSaldo.textContent = formatarMoeda(saldo)
}

if(dataTime){
    dataTime.textContent = dataAtual.toLocaleDateString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }); //configurando a data
}



