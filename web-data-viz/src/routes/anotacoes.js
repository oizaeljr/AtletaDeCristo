var express = require("express");
var router = express.Router();

var anotacoesController = require("../controllers/anotacoesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/adicionar", function (req, res) {
    anotacoesController.adicionar(req, res);
})

router.get("/listar/:idUsuario/:idObjetivo", function (req, res) {
    anotacoesController.listar(req, res);
}) 
 
router.post("/inserirTarefas", function (req, res) {
    anotacoesController.inserirTarefas(req, res);
})

 
module.exports = router;