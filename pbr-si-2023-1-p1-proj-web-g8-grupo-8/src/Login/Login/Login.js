function validarLogin() {
  // Obtém o email e a senha do LocalStorage
  var dadosArmazenados = JSON.parse(localStorage.getItem("dadosCadastro"));

  // Verifica se os dados estão presentes no LocalStorage
  if (dadosArmazenados && dadosArmazenados.email && dadosArmazenados.password) {
    // Obtém os valores inseridos pelo usuário
    var emailInserido = document.getElementById("emailInput").value;
    var senhaInserida = document.getElementById("passwordInput").value;

    // Compara os valores inseridos com os valores armazenados
    if (
      emailInserido === dadosArmazenados.email &&
      senhaInserida === dadosArmazenados.password
    ) {
      // Dados válidos, faça a ação desejada aqui
      console.log("Dados válidos. Acesso permitido!");
      // Redirecione para a página desejada após o login
      window.location.href = "/src/Tela Inicial/Usuario/InicioUsuario.html";
    } else {
      // Dados inválidos, exiba uma mensagem de erro
      console.log("Dados inválidos. Acesso negado!");
      // Exiba uma mensagem de erro para o usuário
      alert("Email ou senha inválidos!");
    }
  } else {
    // Dados não encontrados no LocalStorage
    console.log("Dados não encontrados. Acesso negado!");
    // Exiba uma mensagem de erro para o usuário
    alert("Email ou senha inválidos!");
  }
}
