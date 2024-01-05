let indicator = document.getElementById('whatsapp-indicator');
let widget = document.getElementById('whatsapp-widget');

// Função para verificar se estamos em uma tela pequena (por exemplo, menos de 600px de largura).
function isSmallScreen() {
    return window.innerWidth <= 600;
}

indicator.addEventListener('mouseover', function() {
    if (!isSmallScreen()) {
        showWidget();
    }
});

indicator.addEventListener('click', function() {
    showWidget();
});

widget.addEventListener('mouseleave', function() {
    hideWidget();
});

document.addEventListener('click', function(event) {
    // Se o clique não foi dentro do widget ou do ícone, oculte o widget.
    if (!widget.contains(event.target) && !indicator.contains(event.target)) {
        hideWidget();
    }
});

function showWidget() {
    indicator.style.display = 'none';
    widget.classList.add('active');
}

function hideWidget() {
    widget.classList.remove('active');
    setTimeout(() => {
        indicator.style.display = 'flex';
    }, 300);
}