'use strict';

//Variables
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos
btnVendas.addEventListener('click', vendas(), false);
btnEstorno.addEventListener('click', estorno(), false);
btnPlanilha.addEventListener('click', planilha(), false);

//Functions
function vendas(){

    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela +1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if(document.getElementById ('mista').checked){
        somaMista = somaMista +1;
        vendaMista = vendaMista +25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa +1;
        vendaCalabresa = vendaCalabresa +25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }

}

function estorno(){

}

function planilha(){

}