function adicionar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var objetivoVar = txt_titulo.value;
    var tarefaVar = txt_tarefa.value;
    var idVar = sessionStorage.ID_USUARIO;

    // Verificando se há algum campo em branco
    if (objetivoVar == undefined && tarefaVar == undefined) {
    //   cardErro.style.display = "block";
    //   mensagem_erro.innerHTML =
    //     "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
      return false;
    } else {
    //   setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch(`/anotacoes/adicionar/${idVar}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        objetivoServer: objetivoVar,
        tarefaServer: tarefaVar,
        idServer: idVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        //   cardErro.style.display = "block";
          objetivoVar.innerHTML = ''
          tarefaVar.innerHTML = ''
        //   mensagem_erro.innerHTML =
        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        //   setTimeout(() => {
        //     window.location = ".html";
        //   }, "2000");

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

  function andamento() {
    telaAndamento.style.display = 'block'
    telaObjetivo.style.display = 'none';
    telaConcluido.style.display = 'none';
    telaLixeira.style.display = 'none';
    span_andamento.style.borderBottom = '1px solid';
    span_objetivo.style.borderBottom = 'none'
    span_concluido.style.borderBottom = 'none'
    span_lixeira.style.borderBottom = 'none'
}
function objetivo() {
    telaObjetivo.style.display = 'block';
    telaAndamento.style.display = 'none'
    telaConcluido.style.display = 'none'
    telaLixeira.style.display = 'none'
    span_objetivo.style.borderBottom = '1px solid'
    span_concluido.style.borderBottom = 'none'
    span_lixeira.style.borderBottom = 'none'
    span_andamento.style.borderBottom = 'none';
}
function concluido() {
    telaConcluido.style.display = 'block'
    telaObjetivo.style.display = 'none';
    telaAndamento.style.display = 'none'
    telaLixeira.style.display = 'none'
    span_concluido.style.borderBottom = '1px solid'
    span_objetivo.style.borderBottom = 'none'
    span_lixeira.style.borderBottom = 'none'
    span_andamento.style.borderBottom = 'none';
}
function lixeira() {
    telaLixeira.style.display = 'block'
    telaConcluido.style.display = 'none'
    telaObjetivo.style.display = 'none';
    telaAndamento.style.display = 'none'
    span_lixeira.style.borderBottom = '1px solid'
    span_concluido.style.borderBottom = 'none'
    span_objetivo.style.borderBottom = 'none'
    span_andamento.style.borderBottom = 'none';
}

function abrirAnotacoes() {
    console.log(img_abrirAnotacoes.src)
    if (img_abrirAnotacoes.src == 'file:///C:/Users/izael/OneDrive/Documentos/SPTECH/ProjetoIndividual/web-data-viz/public/assets/imagens/setaDireita.png') {
        table_tarefas.style.display = 'flex';
        div_addTarefa.style.display = 'flex';
        img_abrirAnotacoes.src = './assets/imagens/setaBaixo.png'
    } else if (img_abrirAnotacoes.src == 'file:///C:/Users/izael/OneDrive/Documentos/SPTECH/ProjetoIndividual/web-data-viz/public/assets/imagens/setaBaixo.png') {
        table_tarefas.style.display = 'none';
        div_addTarefa.style.display = 'none';
        img_abrirAnotacoes.src = './assets/imagens/setaDireita.png'
    } 
}

    
function adicionarTarefa() {
tableCampo.innerHTML += ` <tr>
                        <td><input type="text" placeholder="Tarefa"><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
                    </tr>`
}

function removerLinha(botao) {
// Encontre a linha (elemento <tr>) onde o botão foi clicado
var linha = botao.parentNode;

// Remova a linha da tabela
linha.parentNode.removeChild(linha);
}
function removerLinhaTitulo(botao) {
// Encontre a linha (elemento <tr>) onde o botão foi clicado
var linha = botao.parentNode.parentNode.parentNode;

// Remova a linha da tabela
linha.parentNode.removeChild(linha);
}
function removerLinhaTarefas(botao) {
// Encontre a linha (elemento <tr>) onde o botão foi clicado
var linha = botao.parentNode.parentNode;

// Remova a linha da tabela
linha.parentNode.removeChild(linha);
}

