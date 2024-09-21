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
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value;

    if (validateInputs(name, cpf, birthdate, address, password)) {
        if (!users[cpf]) {
            users[cpf] = { name, cpf, birthdate, address, password };
            showMessage("Cadastro realizado com sucesso!", "green", 'message');
            clearInputs();
        } else {
            showMessage("CPF já cadastrado. Tente outro.", "red", 'message');
        }
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
        showMessage("Login bem-sucedido!", "green", 'loginMessage');
        displayAllUsers();  // Mostra todos os usuários para o master
    } else {
        const user = Object.values(users).find(user => user.name === name && user.password === password);
        
        if (user) {
            showMessage("Login bem-sucedido!", "green", 'loginMessage');
            currentUser = user;
            displayUserInfo(user);
        } else {
            showMessage("Nome ou senha incorretos. Tente novamente.", "red", 'loginMessage');
        }
    }
});

document.getElementById('forgotPassword').addEventListener('click', () => {
    const randomPassword = generateRandomPassword(12);
    const passwordDisplay = document.getElementById('randomPassword');
    passwordDisplay.innerText = `Sua nova senha é: ${randomPassword}`;
    passwordDisplay.style.fontWeight = 'bold';
    passwordDisplay.style.color = '#FF9C4A';
    passwordDisplay.style.marginTop = '10px';
    passwordDisplay.style.fontSize = '18px';
    
    // Atualiza a senha do usuário correspondente
    if (currentUser) {
        currentUser.password = randomPassword;  // Atualiza a senha do usuário
    }
});

document.getElementById('backToRegistration').addEventListener('click', () => {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registration').style.display = 'block';
});

document.getElementById('backToLogin').addEventListener('click', () => {
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

function validateInputs(name, cpf, birthdate, address, password) {
    if (!isValidName(name)) {
        showMessage("Nome deve conter apenas letras.", "red", 'message');
        return false;
    }
    if (!validateCPF(cpf)) {
        showMessage("CPF deve estar no formato xxx.xxx.xxx-xx.", "red", 'message');
        return false;
    }
    if (!validateBirthdate(birthdate)) {
        showMessage("Data de nascimento deve estar no formato dd/mm/aaaa.", "red", 'message');
        return false;
    }
    if (!address) {
        showMessage("Endereço não pode ser vazio.", "red", 'message');
        return false;
    }
    if (!password) {
        showMessage("Senha não pode ser vazia.", "red", 'message');
        return false;
    }
    return true;
}

function isValidName(name) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(name);
}

document.getElementById('cpf').addEventListener('input', (event) => {
    let cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }
    event.target.value = formatCPF(cpf);
});

document.getElementById('birthdate').addEventListener('input', (event) => {
    let date = event.target.value.replace(/\D/g, '');
    if (date.length > 8) {
        date = date.slice(0, 8);
    }
    event.target.value = formatBirthdate(date);
});

function validateCPF(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formatCPF(cpf));
}

function validateBirthdate(birthdate) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(birthdate);
}

function showMessage(message, color, elementId) {
    const messageElement = document.getElementById(elementId);
    messageElement.innerText = message;
    messageElement.style.color = color;
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('address').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginName').value = '';
    document.getElementById('loginPassword').value = '';
}

function displayUserInfo(user) {
    const userDetails = 
        `<p><strong>Nome:</strong> ${user.name}</p>
         <p><strong>CPF:</strong> ${formatCPF(user.cpf)}</p>
         <p><strong>Data de Nascimento:</strong> ${user.birthdate}</p>
         <p><strong>Endereço:</strong> ${user.address}</p>`;
    document.getElementById('userDetails').innerHTML = userDetails;
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
}

function displayAllUsers() {
    const userDetailsList = Object.values(users).map(user => 
        `<p><strong>Nome:</strong> ${user.name} | 
         <strong>CPF:</strong> ${formatCPF(user.cpf)} | 
         <strong>Data de Nascimento:</strong> ${user.birthdate} | 
         <strong>Endereço:</strong> ${user.address}</p>
         <hr>`  // Adiciona uma linha horizontal
    ).join('');
    
    // Remove a última linha horizontal
    const finalOutput = userDetailsList ? userDetailsList.slice(0, -4) : 'Nenhum usuário cadastrado.';
    
    document.getElementById('userDetails').innerHTML = finalOutput;
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
}

function formatCPF(cpf) {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;
}

function formatBirthdate(date) {
    if (date.length >= 8) {
        return `${date.substring(0, 2)}/${date.substring(2, 4)}/${date.substring(4, 8)}`;
    }
    return date.replace(/(\d{2})(\d{2})?(\d{4})?/, (match, p1, p2, p3) => {
        return p1 + (p2 ? '/' + p2 : '') + (p3 ? '/' + p3 : '');
    });
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}