import { TipoData } from "../types/TipoData.js";
export function formatarMoeda(variavel) {
    return variavel.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' }); //Define a formatação da moeda local
}
export function formatarData(valor, formato = TipoData.PADRAO) {
    if (formato == TipoData.DIA_SEMANA_DIA_MES_ANO) {
        return valor.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }); //configurando a data
    }
    else if (formato == TipoData.DIA_MES) {
        return valor.toLocaleDateString('pt-br', { day: '2-digit', month: '2-digit' });
    }
    else {
        return valor.toLocaleDateString('pt-br', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
}
