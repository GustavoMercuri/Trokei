function showScreen(screenId) {
    // Oculta todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => {
        s.classList.add('hidden');
    });

    // Mostra a tela selecionada
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.remove('hidden');
    activeScreen.classList.add('active');
}


// Função para salvar os dados preenchidos no localStorage
function saveData(tipo) {
    // Obtendo os valores dos campos
    let email = '';
    let cpfCnpj = '';
    let senha = '';

    if (tipo === 'profissional') {
        email = document.getElementById('email-prof').value;
        cpfCnpj = document.getElementById('cpf-cnpj-prof').value;
        senha = document.getElementById('senha-prof').value;
        
        // Salvando os dados no localStorage
        localStorage.setItem('email-prof', email);
        localStorage.setItem('cpf-cnpj-prof', cpfCnpj);
        localStorage.setItem('senha-prof', senha);
    } else if (tipo === 'usuario') {
        email = document.getElementById('email-user').value;
        cpfCnpj = document.getElementById('cpf-user').value;
        senha = document.getElementById('senha-user').value;

        // Salvando os dados no localStorage
        localStorage.setItem('email-user', email);
        localStorage.setItem('cpf-user', cpfCnpj);
        localStorage.setItem('senha-user', senha);
    }

    // Mensagem de confirmação
    alert('Dados salvos com sucesso!');
}

// Função para preencher os campos com os dados armazenados
function loadSavedData() {
    const emailProf = localStorage.getItem('email-prof');
    const cpfCnpjProf = localStorage.getItem('cpf-cnpj-prof');
    const senhaProf = localStorage.getItem('senha-prof');
    
    const emailUser = localStorage.getItem('email-user');
    const cpfUser = localStorage.getItem('cpf-user');
    const senhaUser = localStorage.getItem('senha-user');

    // Limpa o valor dos campos de profissional se já houver dados salvos
    if (emailProf && cpfCnpjProf && senhaProf) {
        document.getElementById('email-prof').value = '';
        document.getElementById('cpf-cnpj-prof').value = '';
        document.getElementById('senha-prof').value = '';
    }

    // Limpa o valor dos campos de usuário se já houver dados salvos
    if (emailUser && cpfUser && senhaUser) {
        document.getElementById('email-user').value = '';
        document.getElementById('cpf-user').value = '';
        document.getElementById('senha-user').value = '';
    }
}

// Chama a função para carregar os dados salvos quando a página for carregada
window.onload = loadSavedData;



// Chama a função para carregar os dados salvos assim que a página for carregada
window.onload = loadSavedData;


// Função para exibir as telas
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });

    const screenToShow = document.getElementById(screenId);
    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active');
}

function saveData(tipo) {
    let allFilled = true;
    let email, cpfCnpj, senha;

    if (tipo === 'profissional') {
        email = document.getElementById('email-prof').value;
        cpfCnpj = document.getElementById('cpf-cnpj-prof').value;
        senha = document.getElementById('senha-prof').value;

        // Verifica se os dados já foram cadastrados
        if (
            localStorage.getItem('email-prof') === email &&
            localStorage.getItem('cpf-cnpj-prof') === cpfCnpj &&
            localStorage.getItem('senha-prof') === senha
        ) {
            window.location.href = "perfil_profissional.html";
            return;
        }

        if (!email || !cpfCnpj || !senha) {
            allFilled = false;
        } else {
            localStorage.setItem('email-prof', email);
            localStorage.setItem('cpf-cnpj-prof', cpfCnpj);
            localStorage.setItem('senha-prof', senha);
        }
    } else if (tipo === 'usuario') {
        email = document.getElementById('email-user').value;
        cpfCnpj = document.getElementById('cpf-user').value;
        senha = document.getElementById('senha-user').value;

        // Verifica se os dados já foram cadastrados
        if (
            localStorage.getItem('email-user') === email &&
            localStorage.getItem('cpf-user') === cpfCnpj &&
            localStorage.getItem('senha-user') === senha
        ) {
            window.location.href = "perfil_usuario.html";
            return;
        }

        if (!email || !cpfCnpj || !senha) {
            allFilled = false;
        } else {
            localStorage.setItem('email-user', email);
            localStorage.setItem('cpf-user', cpfCnpj);
            localStorage.setItem('senha-user', senha);
        }
    }

    if (allFilled) {
        alert('Dados salvos com sucesso!');
        window.location.href = "index.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function verificarEmailRecuperacao() {
    // Obtém o email inserido no campo de recuperação
    const emailRecuperacao = document.querySelector('#recovery-screen .input-field').value;

    // Obtém os emails salvos no localStorage
    const emailUsuario = localStorage.getItem('email-user');
    const emailProfissional = localStorage.getItem('email-prof');

    // Verifica se o email inserido corresponde a um dos emails salvos
    if (emailRecuperacao === emailUsuario || emailRecuperacao === emailProfissional) {
        alert("Email de recuperação enviado");
        // Exibe a tela de sucesso, caso queira trocar para esta seção
        showScreen('success-screen');
    } else {
        alert("Não existe uma conta com esse email");
    }
}

// Adiciona o evento de clique ao botão "Continuar" na tela de recuperação de senha
document.querySelector('#recovery-screen .login-button').addEventListener('click', verificarEmailRecuperacao);
// Função para redirecionar para a página 'index.html' ao clicar na mensagem
document.querySelector('.pswr').addEventListener('click', function() {
    window.location.href = 'index.html';
});
