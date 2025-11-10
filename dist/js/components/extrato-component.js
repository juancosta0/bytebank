import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from '../utils/formatadores.js';
import { TipoData } from '../types/TipoData.js';
const elementoRegistroTransacoesExtrato = document.querySelector('.extrato .registro-transacoes');
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacaoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, TipoData.DIA_MES)}</time>
                </div>
            `;
        }
        htmlRegistroTransacoes += `
        <div class=transacoes-group'>
            <strong class="mes-gruop">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>`;
    }
    if (htmlRegistroTransacoes == "") {
        htmlRegistroTransacoes = '<div>Não há transações.</div>';
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
