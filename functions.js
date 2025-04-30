// Adicionar event listener ao botão de copiar
document.addEventListener('DOMContentLoaded', () => {
    const botaoCopiar = document.querySelector('button[data-acao="copiar-email"]');
    if (botaoCopiar) {
        botaoCopiar.addEventListener('click', copiarEmail);
    }
});

// Inicializa o ícone do botão
atualizarIconeBotao();




// Automatiza o menu suspenso para retrair ao rolar a página
document.addEventListener('scroll', () => {
    const menuSuspenso = document.querySelector('.menu-suspenso');
    if (menuSuspenso) {
        menuSuspenso.style.transition = 'transform 0.3s ease';
        if (window.scrollY > 50) {
            menuSuspenso.style.transform = 'translateY(-100%)'; // Retrai o menu
        } else {
            menuSuspenso.style.transform = 'translateY(0)'; // Mostra o menu
        }
    }
});
function copiarEmail() {
    const email = "seuemail@exemplo.com"; // Substitua pelo email desejado
    navigator.clipboard.writeText(email).then(() => {
        exibirMensagem("Email copiado com sucesso!", true);
    }).catch(() => {
        exibirMensagem("Erro ao copiar o email.", false);
    });
}

// Função para exibir mensagens de feedback ao usuário
function exibirMensagem(mensagem, sucesso) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.position = 'fixed';
    mensagemDiv.style.bottom = '20px';
    mensagemDiv.style.left = '50%';
    mensagemDiv.style.transform = 'translateX(-50%)';
    mensagemDiv.style.padding = '10px 20px';
    mensagemDiv.style.borderRadius = '5px';
    mensagemDiv.style.color = '#fff';
    mensagemDiv.style.backgroundColor = sucesso ? '#4CAF50' : '#f44336';
    mensagemDiv.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    mensagemDiv.style.zIndex = '1000';
    mensagemDiv.style.fontSize = '14px';
    document.body.appendChild(mensagemDiv);

    setTimeout(() => {
        mensagemDiv.remove();
    }, 3000);
}

// Atualiza o ícone do botão para melhor usabilidade em dispositivos móveis
function atualizarIconeBotao() {
    const botaoCopiar = document.querySelector('button[data-acao="copiar-email"]');
    if (botaoCopiar) {
        botaoCopiar.innerHTML = '<span style="font-size: 18px;">📋</span> Copiar Email';
        botaoCopiar.style.padding = '10px 15px';
        botaoCopiar.style.fontSize = '16px';
        botaoCopiar.style.borderRadius = '5px';
        botaoCopiar.style.border = 'none';
        botaoCopiar.style.backgroundColor = '#007BFF';
        botaoCopiar.style.color = '#fff';
        botaoCopiar.style.cursor = 'pointer';
        botaoCopiar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        botaoCopiar.style.transition = 'background-color 0.3s ease';

        botaoCopiar.addEventListener('mouseover', () => {
            botaoCopiar.style.backgroundColor = '#0056b3';
        });

        botaoCopiar.addEventListener('mouseout', () => {
            botaoCopiar.style.backgroundColor = '#007BFF';
        });
    }
}


