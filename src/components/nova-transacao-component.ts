import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";


const elementoForms = document.querySelector('.block-nova-transacao form') as HTMLFormElement; //Formulario HTML

elementoForms.addEventListener('submit', function (event) {
    try{
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

    const novaTransacao: Transacao = { //Criando um objeto para armazenar os dados
        tipoTransacao: tipo,
        valor: valor,
        data: data
    };

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoForms.reset();
    } catch(erro){
        alert(erro.message);
    }
})
