// Adicionar event listener ao botão de copiar
document.addEventListener('DOMContentLoaded', () => {
    const botaoCopiar = document.querySelector('button[data-acao="copiar-email"]');
    if (botaoCopiar) {
        botaoCopiar.addEventListener('click', copiarEmail);
    }
});

// Inicializa o ícone do botão
atualizarIconeBotao();






