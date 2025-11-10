import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { TipoData } from "../types/TipoData.js";
import Conta from "../types/Conta.js";

export const elemetoSaldo = document.querySelector('.cc .valor') as HTMLElement; //Elemento HTML

const dataTime = document.querySelector('time') as HTMLElement;

if(dataTime){
    dataTime.textContent = formatarData(Conta.getDataAcesso(), TipoData.DIA_SEMANA_DIA_MES_ANO)
}

renderizarSaldo();

function renderizarSaldo(): void{
    if(elemetoSaldo){
        elemetoSaldo.textContent = formatarMoeda(Conta.getSaldo())
    }
}  

const SaldoComponent = {
    atualizar(){
        renderizarSaldo();
    }
}

export default SaldoComponent;

