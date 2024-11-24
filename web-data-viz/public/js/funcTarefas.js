function filtroTasks() {
  const sel_filtro = document.getElementById('filtro').value;
  const tasks = document.getElementById('lista-task').children;

  for (const task of tasks) {
    switch (sel_filtro) {
      case 'completa':
        task.style.display = task.classList.contains('completa') ? 'block' : 'none';
        break;
      case 'incompleta':
        task.style.display = !task.classList.contains('completa') ? 'block' : 'none';
        break;
      default:
        task.style.display = 'block';
    }
  }
}

function inserirTarefas() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  var textoVar = document.getElementById('nova-task').value
  var fkUsuarioVar = sessionStorage.ID_USUARIO;
  // Verificando se há algum campo em branco
  if (textoVar == undefined) {
    //   cardErro.style.display = "block";
    //   mensagem_erro.innerHTML =
    //     "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
    return false;
  } else {
    //   setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch(`/anotacoes/inserirTarefas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      textoServer: textoVar,
      fkUsuarioServer: fkUsuarioVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        //   cardErro.style.display = "block";

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          window.location.reload()
        })
      } else {
        throw "Houve um erro ao tentar realizar a inserção!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });

  return false;
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

        var quantConcluidas = 0
        var quantEmAndamento = 0

        for (var contador = 0; contador < json.length; contador++) {
          var idTarefa = json[contador].idTarefa;
          const novaTask = json[contador].textoTarefa;
          const task = novaTask.trim();


          const itemLista = document.createElement('li');
          itemLista.id = `tarefa${contador}`
          itemLista.textContent = task;
          itemLista.classList.add('itens');


          // Adicionar botão de remover
          const btnRemover = document.createElement('button');
          const iconeRemover = document.createElement('img');
          iconeRemover.src = './assets/imagens/lixeira.png';
          iconeRemover.alt = 'Remover';
          iconeRemover.width = 20;
          btnRemover.id = `btnRemover${contador}`
          btnRemover.classList.add('remove-button');
          btnRemover.appendChild(iconeRemover);

          // Adicionar botão de concluir
          const btnCompletar = document.createElement('button');
          const iconeCompletar = document.createElement('img');
          iconeCompletar.src = './assets/imagens/concluido.png';
          iconeCompletar.alt = 'Concluir';
          iconeCompletar.width = 20;
          btnCompletar.id = `btnCompletar${contador}`
          btnCompletar.classList.add('concluir-button');
          btnCompletar.appendChild(iconeCompletar);

          // Encapsular os event listeners para capturar o valor correto de idTarefa
          (function (idTarefaAtual) {
            btnRemover.addEventListener('click', () => deletarTarefas(idTarefaAtual));
            btnCompletar.addEventListener('click', () => completarTarefas(idTarefaAtual));
          })(idTarefa);

          // Adicionar botões à tarefa
          itemLista.appendChild(btnCompletar);
          itemLista.appendChild(btnRemover);

          if (json[contador].statsTarefa == 'Concluída') {
            itemLista.classList.add('completa');
            quantConcluidas++
          }

          const lista = document.getElementById('lista-task');
          lista.appendChild(itemLista);
        }
        quantEmAndamento = json.length - quantConcluidas
        div_tarefasConcluidas.innerHTML = quantConcluidas;
        div_tarefasEmAndamento.innerHTML = quantEmAndamento;
      });

    } else {

      console.log("Houve um erro ao tentar realizar a listagem!");

      resposta.text().then(texto => {
        console.error(texto);
      });
    }

  }).catch(function (erro) {
    console.log(erro);
  })

  return false;
}

function deletarTarefas(idTarefa) {
  console.log("Criar função de apagar post escolhido - ID" + idTarefa);
  fetch(`/anotacoes/deletarTarefas/${idTarefa}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {

    if (resposta.ok) {
      window.alert(`Tarefa deletada com sucesso!`);
      window.location.reload()
    } else if (resposta.status == 404) {
      window.alert("Deu 404!");
    } else {
      throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });
}

function completarTarefas(idTarefa) {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  var idTarefaVar = idTarefa;

  // Enviando o valor da nova input
  fetch(`/anotacoes/completarTarefas/${idTarefaVar}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      idTarefaServer: idTarefaVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        //   cardErro.style.display = "block";
        //   mensagem_erro.innerHTML =
        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
        window.location.reload()
        //   limparFormulario();
        //   finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar a atualização!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });

  return false;
}

