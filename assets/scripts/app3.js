document.getElementById("botao-pesquisar").addEventListener("click", toggleSearchBar);

document.getElementById("botao-aleatorio").addEventListener("click", mostrarHeroiAleatorio);

function mostrarHeroiAleatorio() {
    const resultadosContainer = document.getElementById("resultados-pesquisa");

    // Seleciona um herói aleatório do array de dados
    const heroiAleatorio = dados[Math.floor(Math.random() * dados.length)];

    // Gera o HTML para exibir o herói aleatório
    const resultado = `
        <div class="item-resultado">
            <h2>${heroiAleatorio.titulo}</h2>
            <img src="${heroiAleatorio.imagem}" alt="${heroiAleatorio.titulo}">
            <p class="descricao-meta">${heroiAleatorio.descricao}</p>
            <a href="${heroiAleatorio.link}" target="_blank">Mais informações</a>
        </div>
    `;
    
    // Exibe o herói aleatório no container de resultados e mostra a barra de pesquisa
    resultadosContainer.innerHTML = resultado;
    resultadosContainer.classList.add('show');
}

document.getElementById("campo-pesquisa").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});

function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('show');
    
    if (searchBar.classList.contains('show')) {
        document.getElementById("campo-pesquisa").focus();
    }
}

function pesquisar(heroi) {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const resultadosContainer = document.getElementById("resultados-pesquisa");

    if (campoPesquisa === '') {
        campoPesquisa = heroi.toLowerCase();
    }
    
    const resultados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(campoPesquisa) ||
        dado.descricao.toLowerCase().includes(campoPesquisa) ||
        dado.tags.toLowerCase().includes(campoPesquisa)
    ).map(dado => `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <img src="${dado.imagem}" alt="${dado.titulo}">
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `).join('');
    
    resultadosContainer.innerHTML = resultados || "<p>Nada foi encontrado</p>";
    resultadosContainer.classList.add('show');
}

const videoHeight = 800;
const contentContainer = document.querySelector('.content-container');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    contentContainer.style.paddingTop = `${videoHeight * 0.001}px`;
});