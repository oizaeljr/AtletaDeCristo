var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function adicionar(objetivo, tarefa, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", objetivo, tarefa, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO objetivo (textoObjetivo, statsObjetivo, fkUsuario) VALUES ('${objetivo}', 'Em andamento', ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirTarefas(tarefa, idObjetivo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tarefa, idObjetivo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tarefa (textoTarefa, statsTarefa, fkObjetivo) VALUES ('${tarefa}', 'Em andamento', ${idObjetivo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT 
            t.idTarefa, 
            t.textoTarefa, 
            t.statsTarefa, 
            t.fkObjetivo, 
            o.textoObjetivo,
            (SELECT COUNT(DISTINCT t2.fkObjetivo) 
            FROM tarefa AS t2 
            JOIN objetivo AS o2 
            ON t2.fkObjetivo = o2.idObjetivo 
            WHERE t2.statsTarefa = 'Em andamento' AND o2.fkUsuario = ${idUsuario}) AS qtdEmAndamento
        FROM tarefa AS t 
        JOIN objetivo AS o 
        ON t.fkObjetivo = o.idObjetivo 
        WHERE t.statsTarefa = 'Em andamento' 
        AND o.fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionar,
    inserirTarefas,
    listar  
};