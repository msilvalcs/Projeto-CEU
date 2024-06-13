document.addEventListener("DOMContentLoaded", function() {
    // Obtém as informações do LocalStorage
    var dadosArmazenados = JSON.parse(localStorage.getItem("dadosCadastro"));
    // Preenche os campos do formulário com os dados armazenados
    var meuTipoCadastroElemento = document.getElementById("meuTipoCadastro");
    var meuNomeElemento = document.getElementById("meuNome");
    var meuEmailElemento = document.getElementById("meuEmail");
    var meuTelefoneElemento = document.getElementById("meuTelefone");
    var meuCepElemento = document.getElementById("meuCep");
    var meuEnderecoElemento = document.getElementById("meuEndereco");
    var meuCursoElemento = document.getElementById("meuCurso");
    var meuPeriodoElemento = document.getElementById("meuPeriodo");
    var meuFaculdadeElemento = document.getElementById("meuFaculdade");
    var meuCampusElemento = document.getElementById("meuCampus");
    var imagemDoBancoDeDados = "caminho/para/a/imagem.jpg";
    var meuFotoElement = document.getElementById("meuFoto");
    var minhaBiografiaElemento = document.getElementById("minhaBiografia");
  
    if (dadosArmazenados) {
      meuTipoCadastroElemento.innerText = dadosArmazenados.tipoCadastro || "";
      meuNomeElemento.innerText = dadosArmazenados.fullName || "";
      meuEmailElemento.innerText = dadosArmazenados.email || "";
      meuTelefoneElemento.innerText = dadosArmazenados.telefone || "";
      meuCepElemento.innerText = dadosArmazenados.CEP || "";
      meuEnderecoElemento.innerText = dadosArmazenados.endereco || "";
      meuCursoElemento.innerText = dadosArmazenados.curso || "";
      meuPeriodoElemento.innerText = dadosArmazenados.periodo || "";
      meuFaculdadeElemento.innerText = dadosArmazenados.faculdade || "";
      meuCampusElemento.innerText = dadosArmazenados.campus || "";
      meuFotoElement.src = imagemDoBancoDeDados;
      var biografia = dadosArmazenados.biografia || "";
      minhaBiografiaElemento.value = biografia;
    }
  });
  