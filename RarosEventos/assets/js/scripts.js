// Script para mostrar/ocultar o texto
document.getElementById('readMore').addEventListener('click', function() {
    const fullText = document.getElementById('fullText');
    if (fullText.style.display === 'none' || fullText.style.display === '') {
        fullText.style.display = 'block'; // Mostra o texto completo
        this.textContent = 'Leia menos'; // Troca o texto do link
    } else {
        fullText.style.display = 'none'; // Esconde o texto completo
        this.textContent = 'Leia mais'; // Restaura o texto do link
    }
});
