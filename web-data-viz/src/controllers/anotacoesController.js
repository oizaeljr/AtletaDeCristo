var anotacoesModel = require("../models/anotacoesModel");

function adicionar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var objetivo = req.body.objetivoServer;
    var tarefa = req.body.tarefaServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (objetivo == undefined) {
        res.status(400).send("O objetivo está undefined!");
    } else if (tarefa == undefined) {
        res.status(400).send("O objetivo está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        anotacoesModel.adicionar(objetivo, tarefa, id)
            .then(
                function (resultado) {
                    console.log(resultado);
                    res.json({idInserido : resultado.insertId});
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.params.id;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        anotacoesModel.listar(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    adicionar,
    listar
}