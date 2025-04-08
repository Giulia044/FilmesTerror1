// Seletores de links de navegação
const menuLinks = document.querySelectorAll('nav ul li a');

// Função para carregar conteúdo baseado no item clicado
function loadContent(page) {
    const contentDiv = document.getElementById('content');
    if (page === 'jogos') {
        contentDiv.innerHTML = `
            <h2>Jogos de Terror</h2>
            <p>Aqui você encontrará uma lista dos melhores jogos de terror como Resident Evil, Silent Hill e outros!</p>
            <div class="category">
                <img src="imagens/jogos/resident4.jpg" alt="Resident Evil 4 Remake" class="category-img">
                <h3>Resident Evil 4</h3>
            </div>
            <div class="category">
                <img src="imagens/jogos/silenthill2.jpg" alt="Silent Hill" class="category-img">
                <h3>Silent Hill</h3>
            </div>
        `;
    } else if (page === 'filmes') {
        contentDiv.innerHTML = `
            <h2>Filmes de Terror</h2>
            <p>Assista aos filmes mais aterrorizantes como O Exorcista, Invocação do Mal e outros!</p>
            <div class="category">
                <img src="imagens/filmes/panico.jpg" alt="Pânico" class="category-img">
                <h3>Pânico</h3>
            </div>
            <div class="category">
                <img src="imagens/filmes/exorcista.jpg" alt="O Exorcista" class="category-img">
                <h3>O Exorcista</h3>
            </div>
        `;
    } else if (page === 'livros') {
        contentDiv.innerHTML = `
            <h2>Livros de Terror</h2>
            <p>Explore os livros que vão te deixar acordado à noite, como O Iluminado e Drácula.</p>
            <div class="category">
                <img src="imagens/livros/it.jpg" alt="It - A Coisa" class="category-img">
                <h3>It - A Coisa</h3>
            </div>
            <div class="category">
                <img src="imagens/livros/dracula.jpg" alt="Drácula" class="category-img">
                <h3>Drácula</h3>
            </div>
        `;
    }
}


menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        loadContent(page);
    });
});

window.addEventListener("load", function() {
    const introElement = document.querySelector('.filmes-intro');
    introElement.classList.add('filmes-intro');
});
