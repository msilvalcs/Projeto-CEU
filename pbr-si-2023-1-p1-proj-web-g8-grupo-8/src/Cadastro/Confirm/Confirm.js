let codigoConfirmacao;

document.addEventListener("DOMContentLoaded", function () {
  // Obtém todos os dados de cadastro do localStorage
  const dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

  if (dadosCadastro && dadosCadastro.length > 0) {
    // Ordena os dados de cadastro por ordem decrescente
    dadosCadastro.sort(function (a, b) {
      return new Date(b.data) - new Date(a.data);
    });

    const ultimoCadastro = dadosCadastro[0]; // Obtém o último cadastro

    const email = ultimoCadastro.email;

    // Gera um código de confirmação aleatório de 6 dígitos
    codigoConfirmacao = gerarCodigoConfirmacao();

    // Envia o código de confirmação por email
    enviarCodigoPorEmail(email, codigoConfirmacao);

    const verifyInput = document.querySelector("#verify");
    const confirmarBtn = document.querySelector("#confirmar-btn");

    verifyInput.addEventListener("input", function () {
      if (verifyInput.value.length > 6) {
        verifyInput.value = verifyInput.value.slice(0, 6);
      }
    });

    confirmarBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão do clique no link

      const codigoInserido = verifyInput.value;
      if (codigoInserido === "") {
        alert("Nenhum código inserido.");
      } else if (codigoInserido === codigoConfirmacao) {
        console.log("Código confirmado. Redirecionando...");

        // Verifica o tipo de cadastro e redireciona para as URLs correspondentes
        if (ultimoCadastro.tipoCadastro === "Aluno") {
          window.location.href =
            "/src/Perfil/Edição perfil aluno/EdicaoPerfilAluno.html";
        } else if (ultimoCadastro.tipoCadastro === "Coordenador") {
          window.location.href =
            "/src/Perfil/Edição perfil coordenador/cord-Perfil.html";
        }
      } else {
        alert("Código incorreto, tente novamente.");
      }
    });

    // Reenviar código quando o botão "reenvio" for clicado
    const reenvioButton = document.querySelector("#reenvio");

    reenvioButton.addEventListener("click", function () {
      codigoConfirmacao = gerarCodigoConfirmacao();
      enviarCodigoPorEmail(email, codigoConfirmacao);
    });
  } else {
    console.error("Dados de contato não encontrados ou email não definido.");
  }
});

// Função para gerar um código de confirmação aleatório de 6 dígitos
function gerarCodigoConfirmacao() {
  const codigoGerado = Math.floor(100000 + Math.random() * 900000); // Gera um número aleatório entre 100000 e 999999

  return codigoGerado.toString();
}

// Função para enviar o código por email e validar
async function enviarCodigoPorEmail(destinatario, codigo) {
  // Simulação do envio do email
  console.log(
    `Enviando código de confirmação ${codigo} para ${destinatario}...`
  );
}
