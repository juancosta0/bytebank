import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
import ExtratoComponent from "./extrato-component.js";
const elementoForms = document.querySelector('.block-nova-transacao form'); //Formulario HTML
elementoForms.addEventListener('submit', function (event) {
    try {
        event.preventDefault();
        if (!elementoForms.checkValidity()) { //Verifica se todos so campos do formularios estão preenchido
            alert('Por gentileza preencha todos os campos!');
            return;
        }
        const tipoTransacao = document.querySelector('#tipoTransacao'); //Deixa explicito que a variavel é um HTMLSelectElement 
        const valorTransacao = document.querySelector('#valor'); //Deixa explicito que a variavel é um HTMLInputElement 
        const dataTransacao = document.querySelector('#data'); //Deixa explicito que a variavel é um HTMLInputElement 
        const tipo = tipoTransacao.value;
        const valor = valorTransacao.valueAsNumber;
        const data = new Date(dataTransacao.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipo,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoForms.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
