function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

// se o campoPesquisa for string vazia
if(!campoPesquisa){
    section.innerHTML = "<p>Campo Vazio</p>"
       return
   }

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
let titulo = "";
let descricao = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank" >Clique aqui para saber mais sobre este curso</a> </div>
        `;
        }
        
    }

    if(!resultados){
        resultados = "<p>Nenhum resultado encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}