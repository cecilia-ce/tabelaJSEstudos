const inputNome = document.getElementById("nome");
const inputData = document.getElementById("data");
const btnPreencher = document.getElementById("btn-preencher");
const btnExcluir = document.getElementById("btn-excluir");
const tabelaDiv = document.getElementById("tabela-div");
const check = document.getElementById("check-head");
let listaDeCheckbox = document.getElementsByClassName("check-table");
const tabelaLinha = document.getElementsByTagName("tr");

function marcarCheckHead(){
    for(i=0; i<listaDeCheckbox.length; i++){
        if(listaDeCheckbox[i].checked == true){
            check.checked = true;
        }
    }
}


function selecionarTudo(){
    for(i=0; i<listaDeCheckbox.length; i++){
        if(listaDeCheckbox[i].checked == false){
            listaDeCheckbox[i].checked = true;
        } else{
            listaDeCheckbox[i].checked = false;
        }
    } 
}

function preencherTabela(){
    let celula = tabelaLinha("td");
    
}