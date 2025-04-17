// Seletores de links de navegação
const menuLinks = document.querySelectorAll('nav ul li a');

// Função para renderizar as categorias dinamicamente
function renderCategories(categories) {
    return categories.map(category => {
        const div = document.createElement('div');
        div.classList.add('category');
        
        const img = document.createElement('img');
        img.src = category.img;
        img.alt = category.alt;
        img.classList.add('category-img');
        
        const h3 = document.createElement('h3');
        h3.textContent = category.name;
        
        div.appendChild(img);
        div.appendChild(h3);
        return div;
    });
}

// Função para carregar conteúdo baseado no item clicado
function loadContent(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Limpar conteúdo anterior

    let headingText = '';
    let descriptionText = '';
    let categories = [];

    // Conteúdo para Jogos
    if (page === 'jogos') {
        headingText = "Jogos de Terror";
        descriptionText = "Aqui você encontrará uma lista dos melhores jogos de terror como Resident Evil, Silent Hill e outros!";
        categories = [
            { name: "Resident Evil 4", img: "imagens/jogos/resident4.jpg", alt: "Resident Evil 4 Remake" },
            { name: "Silent Hill", img: "imagens/jogos/silenthill2.jpg", alt: "Silent Hill" }
        ];
    } 
    // Conteúdo para Filmes
    else if (page === 'filmes') {
        headingText = "Filmes de Terror";
        descriptionText = "Assista aos filmes mais aterrorizantes como O Exorcista, Invocação do Mal e outros!";
        categories = [
            { name: "Pânico", img: "imagens/filmes/panico.jpg", alt: "Pânico" },
            { name: "O Exorcista", img: "imagens/filmes/exorcista.jpg", alt: "O Exorcista" }
        ];
    }
    // Conteúdo para Livros
    else if (page === 'livros') {
        headingText = "Livros de Terror";
        descriptionText = "Explore os livros que vão te deixar acordado à noite, como O Iluminado e Drácula.";
        categories = [
            { name: "It - A Coisa", img: "imagens/livros/it.jpg", alt: "It - A Coisa" },
            { name: "Drácula", img: "imagens/livros/dracula.jpg", alt: "Drácula" }
        ];
    }

    // Inserir título e descrição
    const heading = document.createElement('h2');
    heading.textContent = headingText;
    contentDiv.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = descriptionText;
    contentDiv.appendChild(description);

    // Renderizar as categorias (Jogos, Filmes ou Livros)
    renderCategories(categories).forEach(category => contentDiv.appendChild(category));
}

// Adiciona eventos de clique nos links de navegação
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        loadContent(page);
    });
});

// Função para adicionar a classe de introdução ao carregar a página
window.addEventListener("load", function() {
    const introElement = document.querySelector('.filmes-intro');
    if (introElement) {
        introElement.classList.add('filmes-intro'); // Aplicando um estilo se necessário
    }
});

// Função para validar o formulário
function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Validação simples
    if (name === "" || email === "") {
      errorMessage.textContent = "Todos os campos são obrigatórios!";
      errorMessage.style.color = "red";
    } else {
      errorMessage.textContent = "Formulário enviado com sucesso!";
      errorMessage.style.color = "green";
    }
  }
  
  // Adiciona o evento de envio ao formulário
  document.getElementById('contactForm').addEventListener('submit', validateForm);
  
  // Adiciona eventos aos botões
  document.getElementById('addItemButton').addEventListener('click', addItem);
  document.getElementById('removeItemButton').addEventListener('click', removeItem);

  
  // Dados fictícios para pesquisa
const items = {
    jogos: ["Resident Evil 4 Remake", "Silent Hill 2", "Outlast", "Amnesia: The Dark Descent","Until Dawn", "Dead By Daylight, " ],
    filmes: ["O Exorcista", "Invocação do Mal", "Pânico", "A Freira", "It, A Coisa", "Halloween", "Um Lugar Silencioso", "A Hora do Pesadelo ", "Jogos Mortais X"],
    livros: ["O Iluminado", "Drácula", "Frankenstein", "A Assombração de Hill House"]
  };
  
  // Função de busca
  function searchContent(event) {
    const query = event.target.value.toLowerCase();
    const results = [];
    
    // Buscar nos itens (jogos, filmes, livros)
    ['jogos', 'filmes', 'livros'].forEach(category => {
      items[category].forEach(item => {
        if (item.toLowerCase().includes(query)) {
          results.push(`${item} (${category})`);
        }
      });
    });
    
    // Exibir resultados
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // Limpar resultados anteriores
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      resultsDiv.appendChild(li);
    });
  }
  
  // Adiciona evento de input
  document.getElementById('searchInput').addEventListener('input', searchContent);

  
  // Função para exibir sugestão aleatória
function suggestRandom() {
    const categories = ['jogos', 'filmes', 'livros'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomItem = items[randomCategory][Math.floor(Math.random() * items[randomCategory].length)];
  
    const suggestionDiv = document.getElementById('randomSuggestion');
    suggestionDiv.innerHTML = `<h3>Sugestão Aleatória:</h3><p>${randomItem} (${randomCategory})</p>`;
  }
  
  // Adiciona evento de clique no botão
  document.getElementById('randomButton').addEventListener('click', suggestRandom);
  