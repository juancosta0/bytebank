import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { TipoData } from "../types/TipoData.js";
export let saldo = 3000;
export const elemetoSaldo = document.querySelector('.cc .valor'); //Elemento HTML
const dataTime = document.querySelector('time');
let dataAtual = new Date();
if (dataTime) {
    dataTime.textContent = formatarData(dataAtual, TipoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
attSaldo(saldo);
export function attSaldo(novoValor) {
    saldo = novoValor;
    if (elemetoSaldo) {
        elemetoSaldo.textContent = formatarMoeda(saldo);
    }
}
