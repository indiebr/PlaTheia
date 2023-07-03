function cadastroUsuario() {
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let createPassword = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (createPassword != confirmPassword) {
        alert('As senhas inseridas não são iguais!');

        document.getElementById("password").value = '';
        document.getElementById("confirm_password").value = '';
    } else if (
        name === '' || 
        cpf === '' ||
        phone === '' ||
        email === '' ||
        createPassword === '' ||
        confirmPassword === '') {
            alert('Todos os campos devem ser preenchidos!');
    } else {
        alert(`Usuário ${name}, com CPF ${cpf}, cadastrado com sucesso!`);

        document.getElementById("name").value = '';
        document.getElementById("cpf").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("confirm_password").value = '';
    }   
}

function cadastroAdministrador() {
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let createPassword = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let file = document.getElementById("file").value;

    if (createPassword != confirmPassword) {
        alert('As senhas inseridas não são iguais!');

        document.getElementById("password").value = '';
        document.getElementById("confirm_password").value = '';
    } else if (
        name === '' || 
        cpf === '' ||
        phone === '' ||
        email === '' ||
        createPassword === '' ||
        confirmPassword === '' ||
        file === '') {
            alert('Todos os campos devem ser preenchidos!');
    } else {
        alert(`Administrador ${name}, com CPF ${cpf}, cadastrado com sucesso!`);

        document.getElementById("name").value = '';
        document.getElementById("cpf").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("confirm_password").value = '';
        document.getElementById("file").value = '';
    }   
}

function cadastroEvento() {
    let name = document.getElementById("name").value;
    let localization = document.getElementById("localization").value;

    if (
        name === '' ||
        localization === '') {
        alert('Todos os campos devem ser preenchidos!');
    } else {
        alert(`Novo evento cadastrado com sucesso!`);

        document.getElementById("name").value = '';
        document.getElementById("localization").value = '';
    }
}