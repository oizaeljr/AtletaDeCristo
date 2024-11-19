/* INÍCIO DA TELA CADASTRO */
function checkNome() {
    var nome = txt_nome.value
    var caracteres = nome.includes('!') || nome.includes('@') || nome.includes('#') || nome.includes('$') || nome.includes('%') || nome.includes('7')
    var numero = nome.includes(0) || nome.includes(1) || nome.includes(2) || nome.includes(3) || nome.includes(4) || nome.includes(5) || nome.includes(6) || nome.includes(7) || nome.includes(8) || nome.includes(9)
    var tamanho = nome.length

    if (nome != '') {
        txt_nome.style.border = '2px solid';
        if (caracteres) {
            txt_nome.style.borderColor = 'red';
            return false;
        } else if (numero) {
            txt_nome.style.borderColor = 'red';
            return false;
        } else if (tamanho < 3) {
            txt_nome.style.borderColor = 'red';
            return false;
        } else {
            txt_nome.style.borderColor = 'green';
            return true;
        }
    } else {
        txt_nome.style.borderColor = 'red';
        return false;
    }
}

function checkEmail() {
    var email = txt_email.value
    var caracteres = email.includes('@') && email.includes('.') && email.includes('com')
    var arroba = email.indexOf('@')
    var com = email.indexOf('.com')
    var br = email.indexOf('.br')
    var espaco = email.includes(' ')
    var tamanho = email.length
    var validacao;

    if (email != '') {
        txt_email.style.border = '2px solid'
        if (caracteres) {
            if (com > arroba || (br > arroba && br > com)) {
                if (((email[tamanho - 1] == 'm' && email[tamanho - 2] == 'o' && email[tamanho - 3] == 'c' && email[tamanho - 4] == '.') || (email[tamanho - 1] == 'r' && email[tamanho - 2] == 'b' && email[tamanho - 3] == '.')) && espaco == false && caracteres) {
                    validacao = true
                } else {
                    validacao = false
                }
            } else {
                validacao = false
            }
        } else {
            validacao = false
        }
    } else {
        validacao = false
    }

    if (validacao) {
        txt_email.style.borderColor = 'green'
        return true;
    } else {
        txt_email.style.borderColor = 'red'
        return false;
    }
}

function checkSenha() {
    var senha = txt_senha.value
    var caracteres = senha.includes('!') || senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('%') || senha.includes('7')
    var numero = senha.includes(0) || senha.includes(1) || senha.includes(2) || senha.includes(3) || senha.includes(4) || senha.includes(5) || senha.includes(6) || senha.includes(7) || senha.includes(8) || senha.includes(9)
    var tamanho = senha.length
    var minuscula = senha.toLowerCase()
    var maiuscula = senha.toUpperCase()
    var validacao = 0

    if (senha != '') {
        txt_senha.style.border = '2px solid'
        div_check.style.display = 'flex'
    } else {
        div_check.style.display = 'none'
    }

    if (senha != minuscula) {
        imgMaiuscula.src = './assets/imagens/certo.png'
        validacao++
    } else {
        imgMaiuscula.src = './assets/imagens/errado.png'
    }

    if (numero) {
        imgNumero.src = './assets/imagens/certo.png'
        validacao++
    } else {
        imgNumero.src = './assets/imagens/errado.png'
    }

    if (senha != maiuscula) {
        imgMinuscula.src = './assets/imagens/certo.png'
        validacao++
    } else {
        imgMinuscula.src = './assets/imagens/errado.png'
    }

    if (caracteres) {
        imgCaracter.src = './assets/imagens/certo.png'
        validacao++
    } else {
        imgCaracter.src = './assets/imagens/errado.png'
    }

    if (tamanho >= 8) {
        imgTamanho.src = './assets/imagens/certo.png'
        validacao++
    } else {
        imgTamanho.src = './assets/imagens/errado.png'
    }

    if (validacao == 5) {
        txt_senha.style.borderColor = 'green'
        return true;
    } else {
        txt_senha.style.borderColor = 'red'
        return false;
    }
}

function checkConfirmarSenha() {
    var senha = txt_senha.value
    var confirmarSenha = txt_confirmarSenha.value

    if (confirmarSenha != '') {
        txt_confirmarSenha.style.border = '2px solid';
        div_confirmarSenha.style.display = 'flex'
    } else {
        div_confirmarSenha.style.display = 'none'
    }

    if (senha == confirmarSenha) {
        txt_confirmarSenha.style.borderColor = 'green'
        imgSenhasIguais.src = './assets/imagens/certo.png'
        return true;
    } else {
        txt_confirmarSenha.style.borderColor = 'red'
        imgSenhasIguais.src = './assets/imagens/errado.png'
        return false;
    }
}

function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = txt_nome.value;
    var emailVar = txt_email.value;
    var senhaVar = txt_senha.value;

    // Verificando se há algum campo em branco
    if (!checkNome() && !checkEmail() && !checkSenha() && !checkConfirmarSenha()) {
        //   cardErro.style.display = "block";
        //   mensagem_erro.innerHTML =
        //     "(Mensagem de erro para todos os campos em branco)";

        //   finalizarAguardar();
        return false;
    } else {
        //   setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                //   cardErro.style.display = "block";

                //   mensagem_erro.innerHTML =
                //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                //   limparFormulario();
                //   finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });

    return false;
}

/* INÍCIO TELA TROCAR SENHA */
function checkNovaSenha() {
    var senha = txt_novaSenha.value
    var caracteres = senha.includes('!') || senha.includes('@') || senha.includes('#') || senha.includes('$') || senha.includes('%') || senha.includes('7')
    var numero = senha.includes(0) || senha.includes(1) || senha.includes(2) || senha.includes(3) || senha.includes(4) || senha.includes(5) || senha.includes(6) || senha.includes(7) || senha.includes(8) || senha.includes(9)
    var tamanho = senha.length
    var minuscula = senha.toLowerCase()
    var maiuscula = senha.toUpperCase()
    var validacao = 0

    if (senha != '') {
        txt_novaSenha.style.border = '2px solid'
        div_checklist.style.display = 'flex'
    } else {
        div_checklist.style.display = 'none'
    }

    if (senha != minuscula) {
        imgMaiusculaT.src = '../imagens/certo.png'
        validacao++
    } else {
        imgMaiusculaT.src = '../imagens/errado.png'
    }

    if (numero) {
        imgNumeroT.src = '../imagens/certo.png'
        validacao++
    } else {
        imgNumeroT.src = '../imagens/errado.png'
    }

    if (senha != maiuscula) {
        imgMinusculaT.src = '../imagens/certo.png'
        validacao++
    } else {
        imgMinusculaT.src = '../imagens/errado.png'
    }

    if (caracteres) {
        imgCaracterT.src = '../imagens/certo.png'
        validacao++
    } else {
        imgCaracterT.src = '../imagens/errado.png'
    }

    if (tamanho >= 8) {
        imgTamanhoT.src = '../imagens/certo.png'
        validacao++
    } else {
        imgTamanhoT.src = '../imagens/errado.png'
    }

    if (validacao == 5) {
        txt_novaSenha.style.borderColor = 'green'
    } else {
        txt_novaSenha.style.borderColor = 'red'
    }
}

function checkConfirmarNovaSenha() {
    var senha = txt_novaSenha.value
    var confirmarSenha = txt_confirmarNovaSenha.value

    if (confirmarSenha != '') {
        txt_confirmarNovaSenha.style.border = '2px solid';
        div_confirmarNovaSenha.style.display = 'flex'
    } else {
        div_confirmarNovaSenha.style.display = 'none'
    }

    if (senha == confirmarSenha) {
        txt_confirmarNovaSenha.style.borderColor = 'green'
        imgSenhasIguaisT.src = '../imagens/certo.png'
    } else {
        txt_confirmarNovaSenha.style.borderColor = 'red'
        imgSenhasIguaisT.src = '../imagens/errado.png'
    }
}
/* FIM TELA TROCAR SENHA */

/* FIM DA TELA CADASTRO */
