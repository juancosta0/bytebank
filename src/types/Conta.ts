import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem('transacoes'), (key: string, value: string) => {
    if(key == 'data'){
        return new Date(value);
    }
    return value;
}) || []; //O localStorage retorna uma string, com o JSON.parse fazemos a conversão para o json novamento

function debitar(valor: number): void{
    if(valor <= 0){
        throw new Error('O Valor debitado deve ser maior que zero!')
    }
    else if(valor <= saldo){
        saldo -= valor;
        localStorage.setItem('saldo', JSON.stringify(saldo)) //Adicionando o saldo no localStorage
    }
}
function depositar(valor: number): void{
    if(typeof valor == 'number' && valor > 0){
        saldo += valor;
        localStorage.setItem('saldo', JSON.stringify(saldo))//Adicionando o saldo no localStorage
    }
}


const Conta = {
    getSaldo(): number{
        return saldo;
    },
    getDataAcesso(): Date{
        return new Date();
    },
    registrarTransacao(novaTransacao: Transacao): void{
            if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
                depositar(novaTransacao.valor);
            }else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
                debitar(novaTransacao.valor);
            }else{
                throw new Error('Valor invalido!');
            }
            transacoes.push(novaTransacao);
            console.log(this.getGruposTransacoes);
            localStorage.setItem('transacoes', JSON.stringify(transacoes))
    },
    getGruposTransacoes(): GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacaoOrdenada: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = '';

        for(let transacao of transacaoOrdenada){
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString('pt-br', {month: "long", year:"numeric"});
            if(labelAtualGrupoTransacao != labelGrupoTransacao){
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                label: labelGrupoTransacao,
                transacaoes: []
            })
            }
            gruposTransacoes.at(-1).transacaoes.push(transacao)
        }
        return gruposTransacoes;


    }
    
}

export default Conta;