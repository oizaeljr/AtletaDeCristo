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

    if (senha == confirmarSenha) {
        txt_confirmarSenha.style.borderColor = 'green'
        imgSenhasIguais.src = '../imagens/certo.png'
    } else {
        txt_confirmarSenha.style.borderColor = 'red'
        imgSenhasIguais.src = '../imagens/errado.png'
    }
}
/* FIM DA TELA CADASTRO */


/* INÍCIO TELA QUIZ */
var tela = '';
var random;
var numPergunta;
var respondida = false
var quantidade = 0
var acertos = 0
var erros = 0

function proximaPergunta() {
    quantidade++
    if (quantidade <= 10) {

        btn_A.style.backgroundColor = 'white'
        btn_B.style.backgroundColor = 'white'
        btn_C.style.backgroundColor = 'white'
        btn_D.style.backgroundColor = 'white'
        btn_E.style.backgroundColor = 'white'
        respondida = false
        div_proxima.style.display = 'none'
        var perguntas = ['Qual é o país que venceu a Copa do Mundo de Futebol da FIFA em 2018?',
            'Quantos jogadores há em uma equipe de basquete em quadra?',
            'Quem é o jogador com mais títulos de Grand Slam no tênis masculino (até 2023)?',
            'Em que ano o Brasil conquistou sua primeira medalha de ouro olímpica no futebol masculino?',
            'Qual é o nome da posição em que o jogador lança a bola no beisebol?',
            'Qual destes esportes utiliza uma rede no centro da quadra?',
            'Qual país tem o maior número de medalhas olímpicas de todos os tempos?',
            'Em qual esporte se usa uma raquete chamada "shuttlecock"?',
            'Quantas voltas completam a maratona (42,195 km) em uma pista de atletismo?',
            'Quem foi o primeiro jogador de basquete a ser reconhecido globalmente e a se tornar um ícone mundial?'
        ];
        random = parseInt(Math.random() * perguntas.length + 1);
        tela = 'esporte'

        span_pergunta.innerHTML = `${perguntas[random - 1]}`
        numPergunta = random;
        if (random == 1) {
            btn_A.innerHTML = 'Brasil'
            btn_B.innerHTML = 'Alemanha'
            btn_C.innerHTML = 'França'
            btn_D.innerHTML = 'Argentina'
            btn_E.innerHTML = 'Espanha'
        }
        if (random == 2) {
            btn_A.innerHTML = '4'
            btn_B.innerHTML = '5'
            btn_C.innerHTML = '6'
            btn_D.innerHTML = '7'
            btn_E.innerHTML = '8'
        }
        if (random == 3) {
            btn_A.innerHTML = 'Pete Sampras'
            btn_B.innerHTML = 'Andre Agassi'
            btn_C.innerHTML = 'Rafael Nadal'
            btn_D.innerHTML = 'Novak Djokovic'
            btn_E.innerHTML = 'Roger Federer'
        }
        if (random == 4) {
            btn_A.innerHTML = '1996'
            btn_B.innerHTML = '2004'
            btn_C.innerHTML = '2008'
            btn_D.innerHTML = '2016'
            btn_E.innerHTML = '2020'
        }
        if (random == 5) {
            btn_A.innerHTML = 'Catcher'
            btn_B.innerHTML = 'Shortstop'
            btn_C.innerHTML = 'First Baseman'
            btn_D.innerHTML = 'Pitcher'
            btn_E.innerHTML = 'Batter'
        }
        if (random == 6) {
            btn_A.innerHTML = 'Basquete'
            btn_B.innerHTML = 'Rugby'
            btn_C.innerHTML = 'Tênis'
            btn_D.innerHTML = 'Golfe'
            btn_E.innerHTML = 'Futebol Americano'
        }
        if (random == 7) {
            btn_A.innerHTML = 'Estados Unidos'
            btn_B.innerHTML = 'Rússia'
            btn_C.innerHTML = 'China'
            btn_D.innerHTML = 'Reino Unido'
            btn_E.innerHTML = 'Alemanha'
        }
        if (random == 8) {
            btn_A.innerHTML = 'Tênis'
            btn_B.innerHTML = 'Squash'
            btn_C.innerHTML = 'Pingue-pongue'
            btn_D.innerHTML = 'Badminton'
            btn_E.innerHTML = 'Pólo'
        }
        if (random == 9) {
            btn_A.innerHTML = '80'
            btn_B.innerHTML = '105,5'
            btn_C.innerHTML = '125'
            btn_D.innerHTML = '100'
            btn_E.innerHTML = '95'
        }
        if (random == 10) {
            btn_A.innerHTML = 'LeBron James'
            btn_B.innerHTML = 'Magic Johnson'
            btn_C.innerHTML = 'Michael Jordan'
            btn_D.innerHTML = 'Kobe Bryant'
            btn_E.innerHTML = 'Larry Bird'
        }
    } else {
        telaQuizEsportes.style.display = 'none'
        span_quantidade.innerHTML = `${quantidade-1}`
        span_acertos.innerHTML = `${acertos}`
        span_erros.innerHTML = `${erros}`
        telaPontuacao.style.display = 'flex'
    }
}

function esportes() {
    telaQuizEsportes.style.display = 'flex';
    telaRanking.style.display = 'none';
    quizEsporte.style.borderBottom = '1px solid';
    quizCristao.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = 'none';
    selecione.style.display = 'none'
    
    proximaPergunta()

}

function alternativaA() {
    if (tela == 'esporte') {
        if (respondida == false) {
            if (numPergunta == 7) {
                btn_A.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_A.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true;
}
function alternativaB() {
    if (tela == 'esporte') {
        if (respondida == false) {
            if (numPergunta == 2 || numPergunta == 9) {
                btn_B.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_B.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true
}
function alternativaC() {
    if (tela == 'esporte') {
        if (respondida == false) {
            if (numPergunta == 1 || numPergunta == 6 || numPergunta == 10) {
                btn_C.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_C.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true
}
function alternativaD() {
    if (tela == 'esporte') {
        if (respondida == false) {
            if (numPergunta == 3 || numPergunta == 4 || numPergunta == 5 || numPergunta == 8) {
                btn_D.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_D.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true
}
function alternativaE() {
    if (tela == 'esporte') {
        if (respondida == false) {
            btn_E.style.backgroundColor = 'red'
            erros++
            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true
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