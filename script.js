let users = {};
let currentUser = null;

function isValidName(name) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(name);
}

document.getElementById('register').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    const password = document.getElementById('password').value;

    if (validateCPF(cpf) && isValidName(name) && password) {
        if (!users[cpf]) {
            users[cpf] = { name, cpf, password };
            showMessage("Cadastro realizado com sucesso!", "green", 'message');
            clearInputs();
            setTimeout(() => {
                document.getElementById('registration').style.display = 'none';
                document.getElementById('loginSection').style.display = 'block';
            }, 1000);
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

    const user = Object.values(users).find(user => user.name === name && user.password === password);
    
    if (user) {
        showMessage("Login bem-sucedido!", "green", 'loginMessage');
        currentUser = user;
        document.getElementById('viewInfo').style.display = 'inline';
        document.getElementById('goToRegister').style.display = 'none';
    } else {
        showMessage("Nome ou senha incorretos. Tente novamente.", "red", 'loginMessage');
    }
});

document.getElementById('viewInfo').addEventListener('click', () => {
    if (currentUser) {
        displayUserInfo(currentUser);
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
    } else {
        showMessage("Nenhum usuário logado.", "red", 'loginMessage');
    }
});

document.getElementById('forgotPassword').addEventListener('click', () => {
    const name = document.getElementById('loginName').value.trim();
    const user = Object.values(users).find(user => user.name === name);
    
    if (user) {
        const tempPassword = generatePassword(12);
        user.password = tempPassword;
        showMessage(`Senha temporária gerada: ${tempPassword}`, "orange", 'loginMessage');
    } else {
        showMessage("Usuário não encontrado. Verifique o nome.", "red", 'loginMessage');
    }
});

document.getElementById('goToRegister').addEventListener('click', () => {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registration').style.display = 'block';
});

document.getElementById('backToLogin').addEventListener('click', () => {
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

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

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
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
    const formattedCpf = formatCPF(user.cpf);
    document.getElementById('userName').innerText = `Nome: ${user.name}`;
    document.getElementById('userCpf').innerText = `CPF: ${formattedCpf}`;
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
