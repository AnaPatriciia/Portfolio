// selecionar o icone pelo id
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        // armazenar a posiçao do scroll
        let top = window.scrollY; 
        // posição vertical offset e ajusta
        let offset = sec.offsetTop - 150; 
        // altura da seçao
        let height = sec.offsetHeight;  
        let id = sec.getAttribute('id'); 

        // Checa se o scroll está dentro da área visível da seção.
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove a classe de todos os links
                link.classList.remove('active');
                // Procura por links (a) dentro de um <nav> que está dentro de um <header>
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
};

// define a funçao que sera executada
menuIcon.onclick = () => {
    // Elimina a necessidade de escrever condições explícitas com if e else
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// seteciona todos elementos .forEach é usado para iterar por cada elemento 
document.querySelectorAll('.clickable-image').forEach(image => {
    // Para cada imagem, adicionamos um "escutador de evento" que responde ao evento de click
    // permite opções adicionais
    image.addEventListener('click', () => {
        const textContainer = image.nextElementSibling;
        textContainer.classList.toggle('hidden');
    });
});
// função é chamada ao clicar em um item
function toggleContent(item) {
    item.classList.toggle('clicked');
}

