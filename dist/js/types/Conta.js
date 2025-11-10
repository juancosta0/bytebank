import { TipoTransacao } from "./TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes = JSON.parse(localStorage.getItem('transacoes'), (key, value) => {
    if (key == 'data') {
        return new Date(value);
    }
    return value;
}) || []; //O localStorage retorna uma string, com o JSON.parse fazemos a conversão para o json novamento
function debitar(valor) {
    if (valor <= 0) {
        throw new Error('O Valor debitado deve ser maior que zero!');
    }
    else if (valor <= saldo) {
        saldo -= valor;
        localStorage.setItem('saldo', JSON.stringify(saldo)); //Adicionando o saldo no localStorage
    }
}
function depositar(valor) {
    if (typeof valor == 'number' && valor > 0) {
        saldo += valor;
        localStorage.setItem('saldo', JSON.stringify(saldo)); //Adicionando o saldo no localStorage
    }
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error('Valor invalido!');
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes);
        localStorage.setItem('transacoes', JSON.stringify(transacoes));
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        const transacaoOrdenada = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = '';
        for (let transacao of transacaoOrdenada) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString('pt-br', { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    }
};
export default Conta;
