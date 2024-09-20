let users = {};
let currentUser = null;

const MASTER_CREDENTIALS = {
    name: "master",
    cpf: "00000000000",
    password: "master"
};

document.getElementById('register').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    const password = document.getElementById('password').value;

    if (validateCPF(cpf) && isValidName(name) && password) {
        if (!users[cpf]) {
            users[cpf] = { name, cpf, password };
            showMessage("Cadastro realizado com sucesso!", "green", 'message');
            clearInputs();
        } else {
            showMessage("CPF já cadastrado. Tente outro.", "red", 'message');
        }
    } else {
        showMessage("Preencha todos os campos corretamente. O nome deve conter apenas letras e o CPF deve ter 11 dígitos.", "red", 'message');
    }
});

document.getElementById('goToLogin').addEventListener('click', () => {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

document.getElementById('login').addEventListener('click', () => {
    const name = document.getElementById('loginName').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (name === MASTER_CREDENTIALS.name && password === MASTER_CREDENTIALS.password) {
        localStorage.setItem('users', JSON.stringify(users)); // Armazenar usuários
        window.location.href = 'master.html'; // Redireciona para a página master
    } else {
        const user = Object.values(users).find(user => user.name === name && user.password === password);
        
        if (user) {
            showMessage("Login bem-sucedido!", "green", 'loginMessage');
            currentUser = user;
            displayUserInfo(user);
            document.getElementById('registration').style.display = 'none';
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('userInfo').style.display = 'block';
        } else {
            showMessage("Nome ou senha incorretos. Tente novamente.", "red", 'loginMessage');
        }
    }
});

document.getElementById('backToLogin').addEventListener('click', () => {
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

function isValidName(name) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(name);
}

document.getElementById('cpf').addEventListener('input', (event) => {
    let cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }
    const formattedCpf = formatCPF(cpf);
    event.target.value = formattedCpf;
});

function validateCPF(cpf) {
    return /^\d{11}$/.test(cpf);
}

function showMessage(message, color, elementId) {
    const messageElement = document.getElementById(elementId);
    messageElement.innerText = message;
    messageElement.style.color = color;
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginName').value = '';
    document.getElementById('loginPassword').value = '';
}

function displayUserInfo(user) {
    document.getElementById('userName').innerText = `Nome: ${user.name}`;
    document.getElementById('userCpf').innerText = `CPF: ${formatCPF(user.cpf)}`;
    document.getElementById('userPassword').innerText = `Senha: ${user.password}`;
    document.getElementById('userInfo').style.display = 'block';
}

function formatCPF(cpf) {
    if (cpf.length <= 3) {
        return cpf;
    } else if (cpf.length <= 6) {
        return `${cpf.substring(0, 3)}.${cpf.substring(3)}`;
    } else if (cpf.length <= 9) {
        return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6)}`;
    } else {
        return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;
    }
}
