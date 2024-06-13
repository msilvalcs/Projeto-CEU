document
  .getElementById("redefinir-senha")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var emailRecuperacao = document.getElementById("email-recuperacao").value;
    var confirmarEmail = document.getElementById("confirmar-email").value;

    // Verifica se os campos estão preenchidos corretamente
    if (emailRecuperacao === "" || confirmarEmail === "") {
      alert("Preencha todos os campos.");
      return;
    }

    // Verifica se os emails correspondem
    if (emailRecuperacao !== confirmarEmail) {
      alert("Os emails não correspondem.");
      return;
    }

    // Obtém os dados do LocalStorage
    var dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

    // Verifica se o email está presente nos dados cadastrados
    var emailEncontrado = false;
    if (dadosCadastro && dadosCadastro.email === emailRecuperacao) {
      emailEncontrado = true;
    }

    // Redireciona para a página adequada
    if (emailEncontrado) {
      alert(
        "Um email de recuperação de senha foi enviado para " +
          emailRecuperacao +
          ".\nVerifique sua caixa de entrada e siga as instruções."
      );
      window.location.href = "/src/Tela inicial/Visitante/InicioVisitante.html";
    } else {
      alert("Email não encontrado.");
    }
  });
