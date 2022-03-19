
//elementos --> id's do codigo html
let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefa = document.querySelector('#listaTarefa')


//evento de quando uma tecla for pressionada
inputNovaTarefa.addEventListener('keypress', (e) => {

    //tecla ENTER é 13
    if(e.keyCode == 13){
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
    }


});



//evento ao apertar o botão "+"
btnAddTarefa.addEventListener('click', (e) => {

        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);


});





//função para gerar id
function gerarId() {
    //arredondar o valor
    return Math.floor(Math.random() * 3000);
}


function adicionarTarefa(tarefa){

    let li = criarTagLI(tarefa);
    listaTarefa.appendChild(li); //vai receber a tag LI
    inputNovaTarefa.value = ''; //atribuindo valor vazio ao input
}


//construindo a parte tags html dentro de LI --> ADICIONAR ITENS A LISTA
function criarTagLI(tarefa){


    let li = document.createElement('li');
    li.id = tarefa.id; //vincula elemento html ao id da tarefa

    let span = document.createElement('span');
    span.classList.add('textoTarefa'); //adicionando classes
    span.innerHTML = tarefa.nome;


    let div = document.createElement('div');

    
    let btnAdd = document.createElement('add');


    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao'); //adicionando classes
    btnExcluir.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/000000/full-trash--v1.png" width="25px"/>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');


    //adicionar os buttons dentro da div
    div.appendChild(btnAdd);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);

    return li;
    
}



//função pra excluir
function excluir(idTarefa) {
    let confirmacao = window.confirm('realmente quer excluir?')
    if(confirmacao) {
        let li = document.getElementById(''+ idTarefa + '');
        if(li) {
            listaTarefa.removeChild(li);
        }    
    }
}