var tarefaVar = [];
var idTitulo = 1;
var contador = 1;
var contadorX = 1;
function adicionar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var objetivoVar = document.getElementById(`txt_titulo${idTitulo}`).value;
  tarefaVar = [];
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
  // for (var contador2 = 1; contador2 <= contador; contador2++) {
  //   tarefaVar.push(document.getElementById(`txt_tarefa${contador2}`).value);
  // }


  // Enviando o valor da nova input
  fetch(`/anotacoes/adicionar`, {
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

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          // txt_titulo.value = ''
          // txt_tarefa1.value = ''
          sessionStorage.ID_OBJETIVO = json.idInserido;

          alert('Objetivo cadastrado com sucesso!')
          idObjetivoVar = sessionStorage.ID_OBJETIVO
          alert('passou')
          inserirTarefas(`txt_titulo${idTitulo}`)

        })
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
var idObjetivoVar = 0;
function inserirTarefas(valor) {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo


  // Verificando se há algum campo em branco
  if (idObjetivoVar == undefined && tarefaVar2 == undefined) {
    //   cardErro.style.display = "block";
    //   mensagem_erro.innerHTML =
    //     "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
    return false;
  } else {
    //   setInterval(sumirMensagem, 5000);
  }
  if (clicou) {
    limite = contador
  } else {
    limite = 1
  }
  for (var contador3 = 1; contador3 <= limite; contador3++) {
    console.log(contador3)
    alert(contador3)
    if (limite > 1) {
      var tarefaVar2 = document.getElementById(`txt_tarefa${contador}`).value;
      contador--
    } else {
      var tarefaVar2 = document.getElementById(`txt_tarefa${contadorX}`).value;
    }
    console.log(`${tarefaVar2} eoakfdf`)

    // Enviando o valor da nova input
    fetch(`/anotacoes/inserirTarefas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        tarefaServer: tarefaVar2,
        idObjetivoServer: idObjetivoVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          //   cardErro.style.display = "block";
          idTitulo++
          contadorX++
          if (limite > 1) {
            tableCampo.innerHTML = ` <tr>
              <td><input type="text" placeholder="Título" id="txt_titulo${idTitulo}"></td>
              <td><input type="text" placeholder="Tarefa" id="txt_tarefa${contador}"><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
              </tr>`
          } else {
            tableCampo.innerHTML = ` <tr>
              <td><input type="text" placeholder="Título" id="txt_titulo${idTitulo}"></td>
              <td><input type="text" placeholder="Tarefa" id="txt_tarefa${contadorX}"><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
              </tr>`
          }

          resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));


          })
        } else {
          throw "Houve um erro ao tentar realizar a inserção!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });
  }
  return false;
}

function cancelarTarefa() {
  idTitulo++
  contador++
  tableCampo.innerHTML = ` <tr>
                        <td><input type="text" placeholder="Título" id="txt_titulo${idTitulo}"></td>
                        <td><input type="text" placeholder="Tarefa" id="txt_tarefa${contador}"><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
                    </tr>`
}

function listar() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/anotacoes/listar/${idUsuario}`, {
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
        console.log(json.length)

        lbl_quantAndamento.innerHTML = json[0].qtdEmAndamento;
        var qtdObjetivos = 0
        var primeiroObj = json[0].fkObjetivo;
        for (var index = 0; index < json.length; index++) {
          if (json[index].fkObjetivo == primeiroObj) {
            qtdObjetivos++
            alert(qtdObjetivos)
          }
        }
        div_objetivosAndamento.innerHTML = '';
        for (var contador = 0; contador < json.length-qtdObjetivos; contador++) {
          alert('to aqui')
          var opcao = json[contador]
          div_objetivosAndamento.innerHTML += `<div class="containerA18">
                <div class="containerA19">
                    <div class="containerA20" >
                        <img onclick="abrirAnotacoes(${opcao.fkObjetivo})" src="./assets/imagens/setaDireita.png" id="img_abrirAnotacoes${opcao.fkObjetivo}">
                        <span>${opcao.textoObjetivo}</span>
                    </div>
                    <div class="containerA21"></div>
                    <div class="containerA22">
                        <div class="containerA23"></div>
                        <span>15%</span>
                    </div>
                    <div class="containerA24">
                        <div class="containerA25">
                            <img src="./assets/imagens/check.png">
                        </div>
                        <img src="./assets/imagens/lixeira.png" onclick="removerLinhaTitulo(this)">
                    </div>
                </div>
                <div class="containerA26">
                    <div class="containerA27">
                        <div class="containerA"></div>
                        <table id="table_tarefas${opcao.fkObjetivo}" style="display: none;">
                            <tbody id="tbodyCampo${opcao.fkObjetivo}">
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="containerA31" id="div_addTarefa${opcao.fkObjetivo}" style="display: none;">
                        <div class="containerA"></div>
                    </div>
                </div>
            </div>`
          // div_objetivosAndamento.innerHTML += `<div class="containerA18">
          //       <div class="containerA19">
          //           <div class="containerA20" >
          //               <img onclick="abrirAnotacoes(${json.idInserido})" src="./assets/imagens/setaDireita.png" id="img_abrirAnotacoes${json.idInserido}">
          //               <span>${json[contador].textoObjetivo}</span>
          //           </div>
          //           <div class="containerA21"></div>
          //           <div class="containerA22">
          //               <div class="containerA23"></div>
          //               <span>15%</span>
          //           </div>
          //           <div class="containerA24">
          //               <div class="containerA25">
          //                   <img src="./assets/imagens/check.png">
          //               </div>
          //               <img src="./assets/imagens/lixeira.png" onclick="removerLinhaTitulo(this)">
          //           </div>
          //       </div>
          //       <div class="containerA26">
          //           <div class="containerA27">
          //               <div class="containerA"></div>
          //               <table id="table_tarefas${json.idInserido}" style="display: none;">
          //                   <tbody id="tbodyCampo${json.idInserido}">

          //                   </tbody>
          //               </table>
          //           </div>
          //           <div class="containerA31" id="div_addTarefa${json.idInserido}" style="display: none;">
          //               <div class="containerA"></div>
          //           </div>
          //       </div>
          //   </div>`
        }
        for (var i = 0; i < json.length; i++) {
          contador++
          document.getElementById(`tbodyCampo${json[i].fkObjetivo}`).innerHTML += ` <tr>
                        <td><input type="text" id="txt_tarefa${contador}" value="${json[i].textoTarefa}" placeholder="Tarefa" disabled><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
                        </tr>`
        }

      });

    } else {

      console.log("Houve um erro ao tentar realizar a listagem!");

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

function andamento() {
  listar()
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

function abrirAnotacoes(id) {
  console.log(id);
  console.log(`table_tarefas${id}`);
  console.log(document.getElementById(`table_tarefas${id}`));
  console.log(`div_addTarefa${id}`);
  console.log(document.getElementById(`div_addTarefa${id}`));
  console.log(`img_abrirAnotacoes${id}`);
  console.log(document.getElementById(`img_abrirAnotacoes${id}`));
  const table_tarefas = document.getElementById(`table_tarefas${id}`)
  const div_addTarefa = document.getElementById(`div_addTarefa${id}`)
  const img_abrirAnotacoes = document.getElementById(`img_abrirAnotacoes${id}`)

  if (img_abrirAnotacoes.src == 'http://localhost:3333/assets/imagens/setaDireita.png') {
    table_tarefas.style.display = 'flex';
    div_addTarefa.style.display = 'flex';
    img_abrirAnotacoes.src = './assets/imagens/setaBaixo.png'
  } else if (img_abrirAnotacoes.src == 'http://localhost:3333/assets/imagens/setaBaixo.png') {
    table_tarefas.style.display = 'none';
    div_addTarefa.style.display = 'none';
    img_abrirAnotacoes.src = './assets/imagens/setaDireita.png'
  }
}
var clicou = false
function adicionarTarefa() {
  contador++
  clicou = true
  tableCampo.innerHTML += ` <tr>
                        <td><input type="text" id="txt_tarefa${contador}" placeholder="Tarefa"><img src="./assets/imagens/lixeira.png" onclick="removerLinha(this)"></td>
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

