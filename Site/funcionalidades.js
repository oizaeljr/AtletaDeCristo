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
var iniciou = false
var saida;

function proximaPergunta() {
    quantidade++
    var perguntas = [];
    if (tela == 'esporte') {
        perguntas = ['Qual é o país que venceu a Copa do Mundo de Futebol da FIFA em 2018?',
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
    } else if (tela == 'biblia') {
        perguntas = ['Quem foi o primeiro rei de Israel?',
            'Qual o nome do pai de João Batista?',
            'Quantos livros tem o Novo Testamento?',
            'Quem libertou o povo de Israel da escravidão no Egito?',
            'Qual era o nome do gigante derrotado por Davi?',
            'Quantos dias e noites choveu durante o dilúvio de Noé?',
            'Quem traiu Jesus por 30 moedas de prata?',
            'Onde Jesus realizou seu primeiro milagre?',
            'Quem escreveu o livro de Apocalipse?',
            'Em que parte do corpo Jonas foi ferido enquanto estava no ventre do grande peixe?'
        ];
    } else if (tela == 'futebol') {
        perguntas = ['Qual jogador brasileiro é conhecido como "Rei do Futebol"?',
            'Qual é o único clube que venceu o Mundial de Clubes da FIFA três vezes consecutivas?',
            'Qual seleção venceu a primeira Copa do Mundo, realizada em 1930?',
            'Quem é o jogador com mais gols em uma única temporada de La Liga?',
            'Qual país é o maior vencedor de Copas do Mundo?',
            'Qual jogador foi o artilheiro da Copa do Mundo de 2002?',
            'Em que ano o Brasil conquistou seu primeiro título mundial?',
            'Qual é o time com mais títulos da Liga dos Campeões da UEFA?',
            'Quem marcou o famoso gol de "Mão de Deus" na Copa do Mundo de 1986?',
            'Qual é o maior artilheiro da história das Copas do Mundo?'
        ];
    } else if (tela == 'mindset') {
        perguntas = ['Qual das opções descreve melhor o conceito de "mindset"?',
            'O que significa "mindset de crescimento"?',
            'Qual das seguintes características é típica de alguém com mindset de crescimento?',
            'Qual é um benefício do mindset de crescimento?',
            'De acordo com Carol Dweck, pessoas com mindset fixo tendem a:',
            'Qual frase caracteriza melhor uma pessoa com mindset de crescimento?',
            'Para desenvolver um mindset de crescimento, é importante:',
            'Qual destes é um exemplo de comportamento de alguém com mindset fixo?',
            'Como o mindset de crescimento pode impactar o sucesso?',
            'Pessoas com mindset de crescimento geralmente veem os desafios como:'
        ];
    } else if (tela == 'aleatorio') {
        perguntas = ['Quantos livros há na Bíblia?',
            'Em que país foi realizada a Copa do Mundo de 2014?',
            'Qual é a importância do feedback para uma pessoa com mindset de crescimento?',
            'Qual esporte é conhecido por ser praticado em uma piscina?',
            'Quem traiu Jesus por 30 moedas de prata, segundo a Bíblia?',
            'Qual é o maior artilheiro da história da seleção brasileira de futebol?',
            'Para alguém com mindset fixo, o fracasso é visto como:',
            'Qual desses esportes envolve um objetivo com uma cesta?',
            'Quem é considerado o "pai da fé" na Bíblia?',
            'Qual característica é essencial para o controle emocional?'
        ];
    }


    if (quantidade <= 10) {

        btn_A.style.backgroundColor = 'white'
        btn_B.style.backgroundColor = 'white'
        btn_C.style.backgroundColor = 'white'
        btn_D.style.backgroundColor = 'white'
        btn_E.style.backgroundColor = 'white'
        respondida = false
        iniciou = true
        div_proxima.style.display = 'none'

        random = parseInt(Math.random() * perguntas.length + 1);

        span_pergunta.innerHTML = `${perguntas[random - 1]}`
        numPergunta = random;
        if (tela == 'esporte') {
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
        } else if (tela == 'biblia') {
            if (random == 1) {
                btn_A.innerHTML = 'Davi'
                btn_B.innerHTML = 'Saul'
                btn_C.innerHTML = 'Salomão'
                btn_D.innerHTML = 'Josué'
                btn_E.innerHTML = 'Samuel'
            }
            if (random == 2) {
                btn_A.innerHTML = 'Zorobabel'
                btn_B.innerHTML = 'Zacarias'
                btn_C.innerHTML = 'Zaqueu'
                btn_D.innerHTML = 'José'
                btn_E.innerHTML = 'Noé'
            }
            if (random == 3) {
                btn_A.innerHTML = '39'
                btn_B.innerHTML = '27'
                btn_C.innerHTML = '40'
                btn_D.innerHTML = '66'
                btn_E.innerHTML = '24'
            }
            if (random == 4) {
                btn_A.innerHTML = 'Abraão'
                btn_B.innerHTML = 'Moisés'
                btn_C.innerHTML = 'Davi'
                btn_D.innerHTML = 'Josué'
                btn_E.innerHTML = 'Elias'
            }
            if (random == 5) {
                btn_A.innerHTML = 'Golias'
                btn_B.innerHTML = 'Saul'
                btn_C.innerHTML = 'Sansão'
                btn_D.innerHTML = 'Nabucodonosor'
                btn_E.innerHTML = 'Judas'
            }
            if (random == 6) {
                btn_A.innerHTML = '30'
                btn_B.innerHTML = '7'
                btn_C.innerHTML = '40'
                btn_D.innerHTML = '12'
                btn_E.innerHTML = '50'
            }
            if (random == 7) {
                btn_A.innerHTML = 'Pedro'
                btn_B.innerHTML = 'João'
                btn_C.innerHTML = 'Tomé'
                btn_D.innerHTML = 'Judas'
                btn_E.innerHTML = 'Tiago'
            }
            if (random == 8) {
                btn_A.innerHTML = 'Cafarnaum'
                btn_B.innerHTML = 'Nazaré'
                btn_C.innerHTML = 'Jerusalém'
                btn_D.innerHTML = 'Belém'
                btn_E.innerHTML = 'Caná'
            }
            if (random == 9) {
                btn_A.innerHTML = 'Paulo'
                btn_B.innerHTML = 'Pedro'
                btn_C.innerHTML = 'João'
                btn_D.innerHTML = 'Tiago'
                btn_E.innerHTML = 'Moisés'
            }
            if (random == 10) {
                btn_A.innerHTML = 'Braço'
                btn_B.innerHTML = 'Perna'
                btn_C.innerHTML = 'Cabeça'
                btn_D.innerHTML = 'Nenhuma'
                btn_E.innerHTML = 'Olho'
            }
        } else if (tela == 'futebol') {
            if (random == 1) {
                btn_A.innerHTML = 'Romário'
                btn_B.innerHTML = 'Zico'
                btn_C.innerHTML = 'Ronaldinho'
                btn_D.innerHTML = 'Pelé'
                btn_E.innerHTML = 'Rivaldo'
            }
            if (random == 2) {
                btn_A.innerHTML = 'Barcelona'
                btn_B.innerHTML = 'Real Madrid'
                btn_C.innerHTML = 'Manchester United'
                btn_D.innerHTML = 'Milan'
                btn_E.innerHTML = 'Bayern de Munique'
            }
            if (random == 3) {
                btn_A.innerHTML = 'Brasil'
                btn_B.innerHTML = 'Argentina'
                btn_C.innerHTML = 'Uruguai'
                btn_D.innerHTML = 'Alemanha'
                btn_E.innerHTML = 'Itália'
            }
            if (random == 4) {
                btn_A.innerHTML = 'Lionel Messi'
                btn_B.innerHTML = 'Cristiano Ronaldo'
                btn_C.innerHTML = 'Telmo Zarra'
                btn_D.innerHTML = 'Raúl'
                btn_E.innerHTML = 'Luis Suárez'
            }
            if (random == 5) {
                btn_A.innerHTML = 'Argentina'
                btn_B.innerHTML = 'Alemanha'
                btn_C.innerHTML = 'Itália'
                btn_D.innerHTML = 'Brasil'
                btn_E.innerHTML = 'França'
            }
            if (random == 6) {
                btn_A.innerHTML = 'Rivaldo'
                btn_B.innerHTML = 'Miroslav Klose'
                btn_C.innerHTML = 'Ronaldo'
                btn_D.innerHTML = 'Thierry Henry'
                btn_E.innerHTML = 'Roberto Baggio'
            }
            if (random == 7) {
                btn_A.innerHTML = '1966'
                btn_B.innerHTML = '1954'
                btn_C.innerHTML = '1958'
                btn_D.innerHTML = '1970'
                btn_E.innerHTML = '1994'
            }
            if (random == 8) {
                btn_A.innerHTML = 'Barcelona'
                btn_B.innerHTML = 'Manchester United'
                btn_C.innerHTML = 'Real Madrid'
                btn_D.innerHTML = 'Liverpool'
                btn_E.innerHTML = 'Bayern de Munique'
            }
            if (random == 9) {
                btn_A.innerHTML = 'Zico'
                btn_B.innerHTML = 'Michel Platini'
                btn_C.innerHTML = 'Diego Maradona'
                btn_D.innerHTML = 'Romário'
                btn_E.innerHTML = 'Gary Lineker'
            }
            if (random == 10) {
                btn_A.innerHTML = 'Pelé'
                btn_B.innerHTML = 'Ronaldo'
                btn_C.innerHTML = 'Miroslav Klose'
                btn_D.innerHTML = 'Gerd Müller'
                btn_E.innerHTML = 'Just Fontaine'
            }
        } else if (tela == 'mindset') {
            if (random == 1) {
                btn_A.innerHTML = 'É a mentalidade de quem possui alto QI'
                btn_B.innerHTML = 'É a forma como encaramos nossos talentos e habilidades'
                btn_C.innerHTML = 'É o desejo de ter sucesso financeiro'
                btn_D.innerHTML = 'É a capacidade de gerenciar emoções'
                btn_E.innerHTML = 'É a habilidade de ser persuasivo'
            }
            if (random == 2) {
                btn_A.innerHTML = 'Acreditar que a inteligência e as habilidades são fixas'
                btn_B.innerHTML = 'Acreditar que o sucesso depende de sorte'
                btn_C.innerHTML = 'Acreditar que as habilidades podem ser desenvolvidas com esforço e prática'
                btn_D.innerHTML = 'Evitar desafios e permanecer na zona de conforto'
                btn_E.innerHTML = 'Ignorar os feedbacks'
            }
            if (random == 3) {
                btn_A.innerHTML = 'Acreditar que talento é fixo e imutável'
                btn_B.innerHTML = 'Evitar feedback para proteger sua autoconfiança'
                btn_C.innerHTML = 'Ver o esforço como parte essencial do aprendizado'
                btn_D.innerHTML = 'Desistir quando enfrenta dificuldades'
                btn_E.innerHTML = 'Preferir atividades em que já é naturalmente bom'
            }
            if (random == 4) {
                btn_A.innerHTML = 'Evitar fracassos'
                btn_B.innerHTML = 'Aumentar a confiança para enfrentar desafios'
                btn_C.innerHTML = 'Ser reconhecido como naturalmente talentoso'
                btn_D.innerHTML = 'Obter resultados imediatos'
                btn_E.innerHTML = 'Se comparar com outras pessoas constantemente'
            }
            if (random == 5) {
                btn_A.innerHTML = 'Ver o fracasso como uma oportunidade de aprendizado'
                btn_B.innerHTML = 'Serem altamente resilientes'
                btn_C.innerHTML = 'Desistir facilmente diante de dificuldades'
                btn_D.innerHTML = 'Se interessarem por feedback construtivo'
                btn_E.innerHTML = 'Procurar desafios para melhorar suas habilidades'
            }
            if (random == 6) {
                btn_A.innerHTML = '"Eu já nasci bom nisso."'
                btn_B.innerHTML = '"Eu odeio feedback."'
                btn_C.innerHTML = '"Eu posso aprender qualquer coisa se me dedicar."'
                btn_D.innerHTML = '"Eu não preciso de ajuda."'
                btn_E.innerHTML = '"Eu evito o que é difícil."'
            }
            if (random == 7) {
                btn_A.innerHTML = 'Ignorar seus erros'
                btn_B.innerHTML = 'Aceitar desafios e aprender com os erros'
                btn_C.innerHTML = 'Procurar sempre por aprovação externa'
                btn_D.innerHTML = 'Evitar qualquer tipo de risco'
                btn_E.innerHTML = 'Priorizar tarefas fáceis e rápidas'
            }
            if (random == 8) {
                btn_A.innerHTML = 'Buscar soluções criativas para resolver problemas'
                btn_B.innerHTML = 'Valorizar o processo de aprendizado'
                btn_C.innerHTML = 'Desistir após cometer um erro'
                btn_D.innerHTML = 'Estar aberto a novas experiências'
                btn_E.innerHTML = 'Gostar de receber feedback'
            }
            if (random == 9) {
                btn_A.innerHTML = 'Fazendo com que as pessoas ignorem suas falhas'
                btn_B.innerHTML = 'Ajudando as pessoas a evitarem desafios'
                btn_C.innerHTML = 'Aumentando a persistência e a disposição para aprender com erros'
                btn_D.innerHTML = 'Garantindo o sucesso instantâneo'
                btn_E.innerHTML = 'Evitando situações novas e desconhecidas'
            }
            if (random == 10) {
                btn_A.innerHTML = 'Ameaças que devem ser evitadas'
                btn_B.innerHTML = 'Oportunidades de aprendizado e crescimento'
                btn_C.innerHTML = 'Barreiras insuperáveis'
                btn_D.innerHTML = 'Apenas uma perda de tempo'
                btn_E.innerHTML = 'Algo que não vale a pena enfrentar'
            }
        } else if (tela == 'aleatorio') {
            if (random == 1) {
                btn_A.innerHTML = '45'
                btn_B.innerHTML = '50'
                btn_C.innerHTML = '66'
                btn_D.innerHTML = '72'
                btn_E.innerHTML = '80'
            }
            if (random == 2) {
                btn_A.innerHTML = 'África do Sul'
                btn_B.innerHTML = 'Alemanha'
                btn_C.innerHTML = 'Brasil'
                btn_D.innerHTML = 'Rússia'
                btn_E.innerHTML = 'França'
            }
            if (random == 3) {
                btn_A.innerHTML = 'Serve apenas para críticas destrutivas'
                btn_B.innerHTML = 'É algo a ser evitado para proteger a autoconfiança'
                btn_C.innerHTML = 'É uma oportunidade de aprender e melhorar'
                btn_D.innerHTML = 'É desnecessário, pois as habilidades são fixas'
                btn_E.innerHTML = 'É útil apenas para validar o que já se sabe'
            }
            if (random == 4) {
                btn_A.innerHTML = 'Polo aquático'
                btn_B.innerHTML = 'Golfe'
                btn_C.innerHTML = 'Ciclismo'
                btn_D.innerHTML = 'Rugby'
                btn_E.innerHTML = 'Beisebol'
            }
            if (random == 5) {
                btn_A.innerHTML = 'Pedro'
                btn_B.innerHTML = 'Judas'
                btn_C.innerHTML = 'João'
                btn_D.innerHTML = 'Tomé'
                btn_E.innerHTML = 'Filipe'
            }
            if (random == 6) {
                btn_A.innerHTML = 'Romário'
                btn_B.innerHTML = 'Zico'
                btn_C.innerHTML = 'Pelé'
                btn_D.innerHTML = 'Neymar'
                btn_E.innerHTML = 'Ronaldo Fenômeno'
            }
            if (random == 7) {
                btn_A.innerHTML = 'Uma oportunidade de aprendizado'
                btn_B.innerHTML = 'Uma prova de falta de habilidade'
                btn_C.innerHTML = 'Um incentivo para se esforçar mais'
                btn_D.innerHTML = 'Algo normal e necessário para crescer'
                btn_E.innerHTML = 'Uma chance de melhorar'
            }
            if (random == 8) {
                btn_A.innerHTML = 'Futebol'
                btn_B.innerHTML = 'Tênis'
                btn_C.innerHTML = 'Basquete'
                btn_D.innerHTML = 'Beisebol'
                btn_E.innerHTML = 'Boxe'
            }
            if (random == 9) {
                btn_A.innerHTML = 'Moisés'
                btn_B.innerHTML = 'Noé'
                btn_C.innerHTML = 'Abraão'
                btn_D.innerHTML = 'Davi'
                btn_E.innerHTML = 'Jacó'
            }
            if (random == 10) {
                btn_A.innerHTML = 'Ignorar completamente as emoções'
                btn_B.innerHTML = 'Reagir impulsivamente'
                btn_C.innerHTML = 'Ser capaz de manter a calma em situações de estresse'
                btn_D.innerHTML = 'Evitar conflitos a qualquer custo'
                btn_E.innerHTML = 'Expressar todas as emoções imediatamente'
            }
        }

    } else {
        telaQuizPerguntas.style.display = 'none'
        span_quantidade.innerHTML = `${quantidade - 1}`
        span_acertos.innerHTML = `${acertos}`
        span_erros.innerHTML = `${erros}`
        telaPontuacao.style.display = 'flex'
    }
}

function sairQuiz() {
    telaQuizPerguntas.style.display = 'none';
    telaPontuacao.style.display = 'none'
    selecione.style.display = 'flex'
    quantidade = 0
    acertos = 0
    erros = 0
    respondida = false
    iniciou = false
    tela = ''
    quizEsporte.style.borderBottom = 'none';
    quizBiblia.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizMindset.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = 'none';
}

function esportes() {
    if (iniciou) {
        if (tela != 'esporte' && tela != '') {
            confirmarSaida()
            if (saida) {
                sairQuiz()
            }
        }
    } else {
        telaQuizPerguntas.style.display = 'flex';
        telaRanking.style.display = 'none';
        quizEsporte.style.borderBottom = '1px solid';
        quizBiblia.style.borderBottom = 'none';
        quizFutebol.style.borderBottom = 'none';
        quizMindset.style.borderBottom = 'none';
        quizAleatorio.style.borderBottom = 'none';
        quizRanking.style.borderBottom = 'none';
        selecione.style.display = 'none'
        tela = 'esporte'
        proximaPergunta()
    }

}
function cristao() {
    if (iniciou) {
        if (tela != 'biblia' && tela != '') {
            confirmarSaida()
            if (saida) {
                sairQuiz()
            }
        }
    } else {
        telaQuizPerguntas.style.display = 'flex';
        telaRanking.style.display = 'none';
        quizEsporte.style.borderBottom = 'none';
        quizBiblia.style.borderBottom = '1px solid';
        quizFutebol.style.borderBottom = 'none';
        quizMindset.style.borderBottom = 'none';
        quizAleatorio.style.borderBottom = 'none';
        quizRanking.style.borderBottom = 'none';
        selecione.style.display = 'none'
        tela = 'biblia'
        proximaPergunta()
    }
}
function futebol() {
    if (iniciou) {
        if (tela != 'futebol' && tela != '') {
            confirmarSaida()
            if (saida) {
                sairQuiz()
            }
        }
    } else {
        telaQuizPerguntas.style.display = 'flex';
        telaRanking.style.display = 'none';
        quizEsporte.style.borderBottom = 'none';
        quizBiblia.style.borderBottom = 'none';
        quizFutebol.style.borderBottom = '1px solid';
        quizMindset.style.borderBottom = 'none';
        quizAleatorio.style.borderBottom = 'none';
        quizRanking.style.borderBottom = 'none';
        selecione.style.display = 'none'
        tela = 'futebol'
        proximaPergunta()
    }
}
function mindset() {
    if (iniciou) {
        if (tela != 'mindset' && tela != '') {
            confirmarSaida()
            if (saida) {
                sairQuiz()
            }
        }
    } else {
        telaQuizPerguntas.style.display = 'flex';
        telaRanking.style.display = 'none';
        quizEsporte.style.borderBottom = 'none';
        quizBiblia.style.borderBottom = 'none';
        quizFutebol.style.borderBottom = 'none';
        quizMindset.style.borderBottom = '1px solid';
        quizAleatorio.style.borderBottom = 'none';
        quizRanking.style.borderBottom = 'none';
        selecione.style.display = 'none'
        tela = 'mindset'
        proximaPergunta()
    }
}
function aleatorio() {
    if (iniciou) {
        if (tela != 'aleatorio' && tela != '') {
            confirmarSaida()
            if (saida) {
                sairQuiz()
            }
        }
    } else {
        telaQuizPerguntas.style.display = 'flex';
        telaRanking.style.display = 'none';
        quizEsporte.style.borderBottom = 'none';
        quizBiblia.style.borderBottom = 'none';
        quizFutebol.style.borderBottom = 'none';
        quizMindset.style.borderBottom = 'none';
        quizAleatorio.style.borderBottom = '1px solid';
        quizRanking.style.borderBottom = 'none';
        selecione.style.display = 'none'
        tela = 'aleatorio'
        proximaPergunta()
    }
}
function ranking() {
    telaQuizPerguntas.style.display = 'none';
    telaRanking.style.display = 'flex';
    quizEsporte.style.borderBottom = 'none';
    quizBiblia.style.borderBottom = 'none';
    quizFutebol.style.borderBottom = 'none';
    quizMindset.style.borderBottom = 'none';
    quizAleatorio.style.borderBottom = 'none';
    quizRanking.style.borderBottom = '1px solid';
    selecione.style.display = 'block'
    selecione.innerHTML = 'OS MELHORES ESTÃO AQUI!'
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
    } else if (tela == 'biblia') {
        if (respondida == false) {
            if (numPergunta == 5) {
                btn_A.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_A.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'futebol') {
        if (respondida == false) {
            if (numPergunta == 4) {
                btn_A.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_A.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'mindset') {
        if (respondida == false) {

            btn_A.style.backgroundColor = 'red'
            erros++

            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'aleatorio') {
        if (respondida == false) {
            if (numPergunta == 4) {
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
    } else if (tela == 'biblia') {
        if (respondida == false) {
            if (numPergunta == 1 || numPergunta == 2 || numPergunta == 3 || numPergunta == 4) {
                btn_B.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_B.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'futebol') {
        if (respondida == false) {
            if (numPergunta == 2) {
                btn_B.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_B.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'mindset') {
        if (respondida == false) {
            if (numPergunta == 1 || numPergunta == 4 || numPergunta == 7 || numPergunta == 10) {
                btn_B.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_B.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'aleatorio') {
        if (respondida == false) {
            if (numPergunta == 5 || numPergunta == 7) {
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
    } else if (tela == 'biblia') {
        if (respondida == false) {
            if (numPergunta == 6 || numPergunta == 9) {
                btn_C.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_C.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'futebol') {
        if (respondida == false) {
            if (numPergunta == 3 || numPergunta == 6 || numPergunta == 7 || numPergunta == 8 || numPergunta == 9 || numPergunta == 10) {
                btn_C.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_C.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'mindset') {
        if (respondida == false) {
            if (numPergunta == 2 || numPergunta == 3 || numPergunta == 5 || numPergunta == 6 || numPergunta == 8) {
                btn_C.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_C.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'aleatorio') {
        if (respondida == false) {
            if (numPergunta == 1 || numPergunta == 2 || numPergunta == 3 || numPergunta == 8 || numPergunta == 9 || numPergunta == 10) {
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
    } else if (tela == 'biblia') {
        if (respondida == false) {
            if (numPergunta == 7 || numPergunta == 10) {
                btn_D.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_D.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'futebol') {
        if (respondida == false) {
            if (numPergunta == 1 || numPergunta == 5) {
                btn_D.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_D.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'mindset') {
        if (respondida == false) {

            btn_D.style.backgroundColor = 'red'
            erros++

            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'aleatorio') {
        if (respondida == false) {
            if (numPergunta == 6) {
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
    } else if (tela == 'biblia') {
        if (respondida == false) {
            if (numPergunta == 8) {
                btn_E.style.backgroundColor = 'green'
                acertos++
            } else {
                btn_E.style.backgroundColor = 'red'
                erros++
            }
            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'futebol') {
        if (respondida == false) {

            btn_E.style.backgroundColor = 'red'
            erros++

            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'mindset') {
        if (respondida == false) {

            btn_E.style.backgroundColor = 'red'
            erros++

            div_proxima.style.display = 'flex';
        } else {

        }
    } else if (tela == 'aleatorio') {
        if (respondida == false) {

            btn_E.style.backgroundColor = 'red'
            erros++

            div_proxima.style.display = 'flex';
        } else {

        }
    }
    respondida = true
}

function confirmarSaida() {
    saida = confirm('Você quer sair?')
}

/* FIM TELA QUIZ */


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