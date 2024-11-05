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
        } else if (numero) {
            txt_nome.style.borderColor = 'red';
        } else if (tamanho < 3) {
            txt_nome.style.borderColor = 'red';
        } else {
            txt_nome.style.borderColor = 'green';
        }
    } else {
        txt_nome.style.borderColor = 'green';
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
                if (((email[tamanho-1] == 'm' && email[tamanho-2] == 'o' && email[tamanho-3] == 'c' && email[tamanho-4] == '.') || (email[tamanho-1] == 'r' && email[tamanho-2] == 'b' && email[tamanho-3] == '.')) && espaco == false && caracteres) {
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
    } else {
        txt_email.style.borderColor = 'red'
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
        imgMaiuscula.src = '../imagens/certo.png'
        validacao++
    } else {
        imgMaiuscula.src = '../imagens/errado.png'
    }

    if (numero) {
        imgNumero.src = '../imagens/certo.png'
        validacao++
    } else {
        imgNumero.src = '../imagens/errado.png'
    }

    if (senha != maiuscula) {
        imgMinuscula.src = '../imagens/certo.png'
        validacao++
    } else {
        imgMinuscula.src = '../imagens/errado.png'
    }

    if (caracteres) {
        imgCaracter.src = '../imagens/certo.png'
        validacao++
    } else {
        imgCaracter.src = '../imagens/errado.png'
    }

    if (tamanho >= 8) {
        imgTamanho.src = '../imagens/certo.png'
        validacao++
    } else {
        imgTamanho.src = '../imagens/errado.png'
    }

    if (validacao == 5) {
        txt_senha.style.borderColor = 'green'
    } else {
        txt_senha.style.borderColor = 'red'
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

    if(senha == confirmarSenha){
        txt_confirmarSenha.style.borderColor = 'green'
        imgSenhasIguais.src = '../imagens/certo.png'
    } else {
        txt_confirmarSenha.style.borderColor = 'red'
        imgSenhasIguais.src = '../imagens/errado.png'
    }
}
/* FIM DA TELA CADASTRO */


/* INÍCIO TELA QUIZ */
function esportes() {
    telaQuizEsportes.style.display = 'flex';
    telaRanking.style.display = 'none';
    quizEsporte.style.borderBottom = '1px solid';
    quizCristao.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = 'none';
    selecione.style.display = 'none'
}
function cristao() {
    telaQuizEsportes.style.display = 'flex';
    telaRanking.style.display = 'none';
    quizEsporte.style.borderBottom = 'none';
    quizCristao.style.borderBottom = '1px solid';
    quizFutebol.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = 'none';
    selecione.style.display = 'none'
}
function futebol() {
    telaQuizEsportes.style.display = 'flex';
    telaRanking.style.display = 'none';
    quizEsporte.style.borderBottom = 'none';
    quizCristao.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = '1px solid';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = 'none';
    selecione.style.display = 'none'
}
function aleatorio() {
    telaQuizEsportes.style.display = 'flex';
    telaRanking.style.display = 'none';
    quizEsporte.style.borderBottom = 'none';
    quizCristao.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = '1px solid';
    quizRanking.style.borderBottom = 'none';
    selecione.style.display = 'none'
}
function ranking() {
    telaQuizEsportes.style.display = 'none';
    telaRanking.style.display = 'flex';
    quizEsporte.style.borderBottom = 'none';
    quizCristao.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = '1px solid';
    selecione.style.display = 'block'
    selecione.innerHTML = 'OS MELHORES ESTÃO AQUI!'
}
/* FIM TELA QUIZ */