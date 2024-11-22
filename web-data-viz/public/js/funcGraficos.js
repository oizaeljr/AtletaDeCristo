function cristao() {

    fetch("/usuarios/cristao", {
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
                sessionStorage.TOTAL_USUARIOS = json[0].total_usuarios;
                sessionStorage.TOTAL_CRISTAO = json[0].total_cristao;

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

function biblia() {

    fetch("/usuarios/biblia", {
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
                sessionStorage.TOTAL_LERAM = json[0].total_leram;

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

function esportesFavoritos() {

    fetch("/usuarios/esportesFavoritos", {
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
                sessionStorage.TOTAL_FUTEBOL = json[0].total_futebol;
                sessionStorage.TOTAL_VOLEI = json[0].total_volei;
                sessionStorage.TOTAL_BASQUETE = json[0].total_basquete;
                sessionStorage.TOTAL_TENIS = json[0].total_tenis;
                sessionStorage.TOTAL_GOLFE = json[0].total_golfe;

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

function esportesNivel() {

    fetch("/usuarios/esportesNivel", {
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
                sessionStorage.TOTAL_PROFISSIONAL = json[0].total_profissional;
                sessionStorage.TOTAL_AMADOR = json[0].total_amador;
                sessionStorage.TOTAL_DIVERSAO = json[0].total_diversao;

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

function esportesGrau() {

    fetch("/usuarios/esportesGrau", {
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
                sessionStorage.TOTAL_BAIXO = json[0].total_baixo;
                sessionStorage.TOTAL_MEDIO = json[0].total_medio;
                sessionStorage.TOTAL_ALTO = json[0].total_alto;

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

function posicao() {
    var id = sessionStorage.ID_USUARIO;

    fetch("/usuarios/posicao", {
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

                for(var contador = 0; contador < json.length; contador++){
                    if (json[contador].idUsuario == id) {
                        ranking_atual.innerHTML = json[contador].posicao;
                        sessionStorage.POSICAO = json[contador].posicao;
                    }
                }

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