function validarCadastro() {
  // Obter os valores dos campos usando os IDs correspondentes
  var tipoCadastro = document.getElementById("tipo-cadastro").value;
  var campus = document.getElementById("campus").value;
  var email = document.getElementById("email").value;
  var fullName = document.getElementById("fullName").value;
  var password = document.getElementById("Password").value;
  var confirmPassword = document.getElementById("password").value;
  var curso = document.getElementById("curso").value;
  var dataNascimento = document.getElementById("Data_Selector").value;

  // Realizar a validação e outras operações necessárias
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    alert("O e-mail fornecido não é válido.");
    return;
  }

  if (password !== confirmPassword) {
    alert("A senha e a confirmação de senha não correspondem.");
    return;
  }
  var regexSenha =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+[\]{}|;':"\\|,.<>/?]).*$/;

  if (!regexSenha.test(password)) {
    alert(
      "A senha deve começar com letra maiúscula, ter um número e um caractere especial."
    );
    return;
  }

  // Verificando se todas as informações estão preenchidas
  if (
    !tipoCadastro ||
    campus === "0" ||
    !email ||
    !fullName ||
    !password ||
    !confirmPassword ||
    !curso ||
    !dataNascimento
  ) {
    alert("Por favor, preencha todas as informações antes de prosseguir.");
    return;
  }

  // Verificar se o email já existe no LocalStorage
  var dadosJSON = localStorage.getItem("dadosCadastro");
  if (dadosJSON) {
    var dadosExistente = JSON.parse(dadosJSON);

    // Verificar se algum cadastro já possui o mesmo email
    var emailExistente = Object.values(dadosExistente).some(function (dados) {
      return dados.email === email;
    });

    if (emailExistente) {
      alert(
        "O email fornecido já está em uso. Por favor, escolha outro email."
      );
      return;
    }
  }

  // Criar um objeto com os dados
  var dados = {
    tipoCadastro: tipoCadastro,
    campus: campus,
    email: email,
    fullName: fullName,
    password: password,
    curso: curso,
    dataNascimento: dataNascimento,
    CEP: "",
    endereco: "",
    escolaridade: "",
    periodo: "",
    telefone: "",
  };

  // Converter o objeto em uma string JSON
  var dadosJSON = JSON.stringify(dados);

  // Armazenar a string JSON em LocalStorage
  localStorage.setItem("dadosCadastro", dadosJSON);

  // Redirecionar para a próxima página
  window.location.href = "/src/Cadastro/Confirm/Confirm.html";
}
