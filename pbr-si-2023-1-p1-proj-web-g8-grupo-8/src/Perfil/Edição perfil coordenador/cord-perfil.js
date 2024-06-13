document.addEventListener("DOMContentLoaded", function() {
    // Obtém as informações do LocalStorage
    var dadosArmazenados = JSON.parse(localStorage.getItem("dadosCadastro"));
    // Preenche os campos do formulário com os dados armazenados
    var meuTipoCadastroElemento = document.getElementById("meuTipoCadastro");
    var meuCepElemento = document.getElementById("meuCep");
    var meuEnderecoElemento = document.getElementById("meuEndereco");
    var meuCargoElemento = document.getElementById("meuCargo");
    var imagemDoBancoDeDados = "caminho/para/a/imagem.jpg";
    var meuFotoElement = document.getElementById("meuFoto");
    var minhaBiografiaElemento = document.getElementById("minhaBiografia");
  
    if (dadosArmazenados) {
      meuTipoCadastroElemento.innerText = dadosArmazenados.tipoCadastro || "";
      meuCepElemento.innerText = dadosArmazenados.CEP || "";
      meuEnderecoElemento.innerText = dadosArmazenados.endereco || "";
      meuCargoElemento.innerText = dadosArmazenados.cargo || "";
      meuFotoElement.src = imagemDoBancoDeDados;
      var biografia = dadosArmazenados.biografia || "";
      minhaBiografiaElemento.value = biografia;
    }
  });
  