function editar() {

}

function cadastrar() {
    let textoTarefa = document.getElementById("tarefa").value;
    
    console.log("criando botoes");
    // criando botoes
    const botaoAlterar = document.createElement("button");
    const textoBtnAlterar = document.createTextNode("Alterar");
    botaoAlterar.appendChild(textoBtnAlterar);

    const botaoExcluir = document.createElement("button");
    const textoBtnExcluir = document.createTextNode("Excluir");
    botaoExcluir.appendChild(textoBtnExcluir);

    const divBotoes = document.createElement("div");
    divBotoes.classList.add("botoes");
    divBotoes.appendChild(botaoAlterar);
    divBotoes.appendChild(botaoExcluir);
    // fim criando botoes

    console.log("criando paragrafo");
    // criando paragrafo
    const paragrafoTarefa = document.createElement("p");
    const tarefa = document.createTextNode(textoTarefa);
    paragrafoTarefa.appendChild(tarefa);
    // fim criando paragrafo

    // const divTarefa = document.createElement("div");
    // divTarefa.appendChild(paragrafoTarefa);
    // divTarefa.appendChild(divBotoes);

    console.log("adicionando a pagina");
    const divTarefa = document.createElement("div");
    divTarefa.classList.add('tarefa');
    divTarefa.appendChild(paragrafoTarefa);
    divTarefa.appendChild(divBotoes);

    const divLista = document.querySelector("div.lista");
    divLista.appendChild(divTarefa);
}

function cadastrar2() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    const element = document.querySelector("div.lista");
    element.appendChild(para);
}