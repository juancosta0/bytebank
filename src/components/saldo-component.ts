import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { TipoData } from "../types/TipoData.js";

export let saldo: number = 3000;

export const elemetoSaldo = document.querySelector('.cc .valor') as HTMLElement; //Elemento HTML

const dataTime = document.querySelector('time') as HTMLElement;

let dataAtual: Date = new Date();


if(dataTime){
    dataTime.textContent = formatarData(dataAtual, TipoData.DIA_SEMANA_DIA_MES_ANO)
}

export function getSaldo(): number{
    return saldo;
}

attSaldo(saldo);

export function attSaldo(novoValor: number): void{
    saldo = novoValor;

    if(elemetoSaldo){
        elemetoSaldo.textContent = formatarMoeda(saldo)
    }
}  



