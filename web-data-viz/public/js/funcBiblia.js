var livro = ''
var tela = ''
var capitulos = ''
function abrirBibliaCompleta() {
    span_bibliaCompleta.style.borderBottom = '1px solid'
    span_versiculoDiario.style.borderBottom = 'none'
    telaBibliaCompleta.style.display = 'block'
    telaVersiculoDiario.style.display = 'none'
    telaCapitulos.style.display = 'none'
    telaVersiculos.style.display = 'none'
}

function abrirVersiculoDiario() {
    exibirVersiculo()
    span_versiculoDiario.style.borderBottom = '1px solid'
    span_bibliaCompleta.style.borderBottom = 'none'
    telaBibliaCompleta.style.display = 'none'
    telaVersiculoDiario.style.display = 'flex'
    telaCapitulos.style.display = 'none'
    telaVersiculos.style.display = 'none'
}

function genesis() {
    livro = 'Gênesis'
    capitulos = 50
    abrirCapitulos()
}
function exodo() {
    livro = 'Êxodo'
    capitulos = 40 
    abrirCapitulos()
}
function levitico() {
    livro = 'Levítico'
    capitulos = 27 
    abrirCapitulos()
}
function numero() {
    livro = 'Números'
    capitulos = 36 
    abrirCapitulos()
}
function deuteronomio() {
    livro = 'Deuteronômio'
    capitulos = 34 
    abrirCapitulos()
}
function josue() {
    livro = 'Josué'
    capitulos = 24 
    abrirCapitulos()
}
function juizes() {
    livro = 'Juízes'
    capitulos = 21 
    abrirCapitulos()
}
function rute() {
    livro = 'Rute'
    capitulos = 4
    abrirCapitulos()
}
function samuel1() {
    livro = '1 Samuel'
    capitulos = 31 
    abrirCapitulos()
}
function samuel2() {
    livro = '2 Samuel'
    capitulos = 24 
    abrirCapitulos()
}
function reis1() {
    livro = '1 Reis'
    capitulos = 22 
    abrirCapitulos()
}
function reis2() {
    livro = '2 Reis'
    capitulos = 25 
    abrirCapitulos()
}
function cronicas1() {
    livro = '1 Crônicas'
    capitulos = 29 
    abrirCapitulos()
}
function cronicas2() {
    livro = '2 Crônicas'
    capitulos = 36 
    abrirCapitulos()
}
function esdras() {
    livro = 'Esdras'
    capitulos = 10 
    abrirCapitulos()
}
function neemias() {
    livro = 'Neemias'
    capitulos = 13 
    abrirCapitulos()
}
function ester() {
    livro = 'Ester'
    capitulos = 10 
    abrirCapitulos()
}
function jo() {
    livro = 'Jó'
    capitulos = 42 
    abrirCapitulos()
}
function salmos() {
    livro = 'Salmos'
    capitulos = 150 
    abrirCapitulos()
}
function proverbios() {
    livro = 'Provérbios'
    capitulos = 31 
    abrirCapitulos()
}
function eclesiastes() {
    livro = 'Eclesiastes'
    capitulos = 12 
    abrirCapitulos()
}
function canticos() {
    livro = 'Cânticos'
    capitulos = 8 
    abrirCapitulos()
}
function isaias() {
    livro = 'Isaías'
    capitulos = 66 
    abrirCapitulos()
}
function jeremias() {
    livro = 'Jeremias'
    capitulos = 52 
    abrirCapitulos()
}
function lamentacoes() {
    livro = 'Lamentações'
    capitulos = 5
    abrirCapitulos()
}
function ezequiel() {
    livro = 'Ezequiel'
    capitulos = 48 
    abrirCapitulos()
}
function daniel() {
    livro = 'Daniel'
    capitulos = 12 
    abrirCapitulos()
}
function oseias() {
    livro = 'Oséias'
    capitulos = 14 
    abrirCapitulos()
}
function joel() {
    livro = 'Joel'
    capitulos = 3 
    abrirCapitulos()
}
function amos() {
    livro = 'Amós'
    capitulos = 9 
    abrirCapitulos()
}
function obadias() {
    livro = 'Obadias'
    capitulos = 1 
    abrirCapitulos()
}
function jonas() {
    livro = 'Jonas'
    capitulos = 4 
    abrirCapitulos()
}
function miqueias() {
    livro = 'Miquéias'
    capitulos = 7 
    abrirCapitulos()
}
function naum() {
    livro = 'Naum'
    capitulos = 3
    abrirCapitulos()
}
function habacuque() {
    livro = 'Habacuque'
    capitulos = 3 
    abrirCapitulos()
}
function sofonias() {
    livro = 'Sofonias'
    capitulos = 3 
    abrirCapitulos()
}
function ageu() {
    livro = 'Ageu'
    capitulos = 2
    abrirCapitulos()
}
function zacarias() {
    livro = 'Zacarias'
    capitulos = 14 
    abrirCapitulos()
}
function malaquias() {
    livro = 'Malaquias'
    capitulos = 4 
    abrirCapitulos()
}
function mateus() {
    livro = 'Mateus'
    capitulos = 28 
    abrirCapitulos()
}
function marcos() {
    livro = 'Marcos'
    capitulos = 16 
    abrirCapitulos()
}
function lucas() {
    livro = 'Lucas'
    capitulos = 24 
    abrirCapitulos()
}
function joao() {
    livro = 'João'
    capitulos = 21 
    abrirCapitulos()
}
function atos() {
    livro = 'Atos'
    capitulos = 28 
    abrirCapitulos()
}
function romanos() {
    livro = 'Romanos'
    capitulos = 16 
    abrirCapitulos()
}
function corintios1() {
    livro = '1 Coríntios'
    capitulos = 16 
    abrirCapitulos()
}
function corintios2() {
    livro = '2 Coríntios'
    capitulos = 13 
    abrirCapitulos()
}
function galatas() {
    livro = 'Gálatas'
    capitulos = 6 
    abrirCapitulos()
}
function efesios() {
    livro = 'Efésios'
    capitulos = 6 
    abrirCapitulos()
}
function filipenses() {
    livro = 'Filipenses'
    capitulos = 4 
    abrirCapitulos()
}
function colossenses() {
    livro = 'Colossenses'
    capitulos = 4 
    abrirCapitulos()
}
function tessalonicenses1() {
    livro = '1 Tessalonicenses'
    capitulos = 5
    abrirCapitulos()
}
function tessalonicenses2() {
    livro = '2 Tessalonicenses'
    capitulos = 3
    abrirCapitulos()
}
function timoteo1() {
    livro = '1 Timóteo'
    capitulos = 6
    abrirCapitulos()
}
function timoteo2() {
    livro = '2 Timóteo'
    capitulos = 4 
    abrirCapitulos()
}
function tito() {
    livro = 'Tito'
    capitulos = 3 
    abrirCapitulos()
}
function filemom() {
    livro = 'Filemom'
    capitulos = 1
    abrirCapitulos()
}
function hebreus() {
    livro = 'Hebreus'
    capitulos = 13 
    abrirCapitulos()
}
function tiago() {
    livro = 'Tiago'
    capitulos = 5 
    abrirCapitulos()
}
function pedro1() {
    livro = '1 Pedro'
    capitulos = 5 
    abrirCapitulos()
}
function pedro2() {
    livro = '2 Pedro'
    capitulos = 3
    abrirCapitulos()
}
function joao1() {
    livro = '1 João'
    capitulos = 5
    abrirCapitulos()
}
function joao2() {
    livro = '2 João'
    capitulos = 1 
    abrirCapitulos()
}
function joao3() {
    livro = '3 João'
    capitulos = 1 
    abrirCapitulos()
}
function judas() {
    livro = 'Judas'
    capitulos = 1
    abrirCapitulos()
}
function apocalipse() {
    livro = 'Apocalipse'
    capitulos = 22 
    abrirCapitulos()
}


function abrirCapitulos() {
    tela = 'capitulo'
    spanLivro.innerHTML = livro;
    // spanLivroCapitulo.innerHTML = livro;
    telaBibliaCompleta.style.display = 'none'
    telaVersiculoDiario.style.display = 'none'
    telaCapitulos.style.display = 'flex'
    telaVersiculos.style.display = 'none'
    // insercaoCapitulos = ''
    var qtdRepeticao = 0
    if (capitulos <= 3) {
        qtdRepeticao = 1
    } else {
        qtdRepeticao = parseInt(capitulos / 3) + 1
    }
    const divCapitulos = document.getElementById('div_capitulos')
    divCapitulos.innerHTML = ''
    var i = 1
    for (var contador = 1; contador <= qtdRepeticao; contador++) {
        divCapitulos.innerHTML += `<div class="container8_1" id="div_linha${contador}"></div>`
        const divLinha = document.getElementById(`div_linha${contador}`)
        for(var contador2 = 1; contador2 <= 3; contador2++){
            if (capitulos > 0) {
                capitulos--
            divLinha.innerHTML += `<div class="container8_2">
                            <span class="titulo" onclick="abrirVersiculos('${livro}', ${i})">${livro} ${i}</span>
                            <span>✔</span>
                        </div>`
                i++
            }
        }
    }
}

function abrirVersiculos(livro, i) {
    nomeLivro.innerHTML = `${livro} `
    numCap.innerHTML = ` ${i}`    
    tela = 'versiculo'
    telaBibliaCompleta.style.display = 'none'
    telaVersiculoDiario.style.display = 'none'
    telaCapitulos.style.display = 'none'
    telaVersiculos.style.display = 'flex'
}

function voltar() {
    if (tela == 'capitulo') {
        telaCapitulos.style.display = 'none'
        telaBibliaCompleta.style.display = 'block'
    } else if (tela == 'versiculo') {
        tela = 'capitulo'
        telaVersiculos.style.display = 'none'
        telaCapitulos.style.display = 'flex'
    }
}


function exibirVersiculo() {
    // aguardar();


    fetch("/versiculo/exibirVersiculo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                var aleatorio = parseInt(Math.random()*json.length+1)
                span_textoVersiculoDiario.innerHTML = json[aleatorio].textoVersiculo;
                span_livroVersiculoDiario.innerHTML = json[aleatorio].livro;
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}