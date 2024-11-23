function atualizar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  var dtNascVar = dataNasc.value;
  var esporteFavVar = sel_esporteFav.value;
  var esporteNivelVar = sel_esporteNivel.value;
  var esporteAnosVar = sel_esporteAnos.value;
  var esporteGrauVar = sel_esporteGrau.value;
  var cristaoVar = sel_cristao.value;
  var cristaoAnosVar = txt_cristaoAnos.value;
  var bibliaVar = sel_biblia.value;
  var fraseVar = txt_frase.value;
  var idVar = sessionStorage.ID_USUARIO;

  if (esporteFavVar == 1) {

  }

  // Enviando o valor da nova input
  fetch(`/usuarios/atualizar/${idVar}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      idServer: idVar,
      dtNascServer: dtNascVar,
      esporteFavServer: esporteFavVar,
      esporteNivelServer: esporteNivelVar,
      esporteAnosServer: esporteAnosVar,
      esporteGrauServer: esporteGrauVar,
      cristaoServer: cristaoVar,
      cristaoAnosServer: cristaoAnosVar,
      bibliaServer: bibliaVar,
      fraseServer: fraseVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        //   cardErro.style.display = "block";

        //   mensagem_erro.innerHTML =
        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
        alert('Cadastro atualizado com sucesso!')
        fraseMotivacional.innerHTML = fraseVar;
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