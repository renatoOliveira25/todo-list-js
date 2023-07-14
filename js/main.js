function cadastrar() {

    const textoTarefa = document.getElementById("tarefa").value;
    const divTarefa = document.createElement("div");
    const tarefa = document.createTextNode(textoTarefa);
    const divLista = document.querySelector("div.listaTarefas");

    if(textoTarefa != '') {
        console.log('cadastrando');
        
        console.log("criando botoes");
        // criando botoes
        const botaoAlterar = document.createElement("img");
        const textoBtnAlterar = document.createTextNode("Alterar");
        botaoAlterar.setAttribute('class', 'icon');
        botaoAlterar.setAttribute('src', 'assets/icon/edit.png');
        botaoAlterar.appendChild(textoBtnAlterar);

        const botaoExcluir = document.createElement("img");
        const textoBtnExcluir = document.createTextNode("Excluir");
        botaoExcluir.setAttribute('class', 'icon');
        botaoExcluir.setAttribute('src', 'assets/icon/delete.png');
        botaoExcluir.appendChild(textoBtnExcluir);

        const divBotoes = document.createElement("div");
        divBotoes.classList.add("botoes");
        divBotoes.appendChild(botaoAlterar);
        divBotoes.appendChild(botaoExcluir);
        // fim criando botoes

        console.log("criando checkbox");
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', 'statusTarefa');
        checkBox.setAttribute('id', 'statusTarefa');

        console.log("criando paragrafo");
        // criando paragrafo
        const paragrafoTarefa = document.createElement("p");
        
        paragrafoTarefa.appendChild(tarefa);
        // fim criando paragrafo

        console.log("adicionando a pagina");
        
        divTarefa.classList.add('tarefa');
        divTarefa.appendChild(checkBox);
        divTarefa.appendChild(paragrafoTarefa);
        divTarefa.appendChild(divBotoes);

        divLista.appendChild(divTarefa);

        document.getElementById("tarefa").value = '';
    } else {
        window.alert('Não é possível inserir tarefa em branco');
    }
    
}

function cadastrar2() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    const element = document.querySelector("div.lista");
    element.appendChild(para);
}