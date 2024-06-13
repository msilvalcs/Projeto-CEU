function CadastrarProjeto() {
    var nomeProjeto = document.getElementById("nomeProjeto").value;
    var descricaoProjeto = document.getElementById("descricaoProjeto").value;
    var dataInicio = document.getElementById("dataInicio").value;
    var cargaHoraria = document.getElementById("anexarPDF").value;
    var turno = document.getElementById("anexarPDF").value;
    var modalidade = document.getElementById("anexarPDF").value;
    var numeroIntegrantes = document.getElementById("numeroIntegrantes").value;
    var anexarPDF = document.getElementById("anexarPDF").value;
    /* var projectImage = document.getElementById("projectImage").value; */

    var projetcText = {
        nomeProjeto: nomeProjeto,
        descricaoProjeto: descricaoProjeto,
        dataInicio: dataInicio,
        cargaHoraria: cargaHoraria,
        turno: turno,
        modalidade: modalidade,
        numeroIntegrantes: numeroIntegrantes,
        anexarPDF: anexarPDF,
        /* projectImage: projectImage, */
      };
  
    // Verificando se todas as informações estão preenchidas
    if (
      !nomeProjeto ||
      !descricaoProjeto ||
      !dataInicio ||
      !cargaHoraria ||
      !turno ||
      !modalidade ||
      !numeroIntegrantes ||
      !anexarPDF 
    ) {
      alert("Preencha todos os campos com * para prosseguir.");
      return;
    }
    
    // Armazenar o novo cadastro no LocalStorage
    if (dadosJSON) {
      var projetosAntigos = JSON.parse(dadosJSON);
      if (!Array.isArray(projetosAntigos)) {
        projetosAntigos = []; // Inicializar como um array vazio se não for um array
      }
      projetosAntigos.push(dados);
      localStorage.setItem("dadosProjetos", JSON.stringify(projetosAntigos));
    } else {
      localStorage.setItem("dadosProjetos", dadosJSON);
    }
  
    // Redirecionar para a próxima página
    var dadosJSON = JSON.stringify(projetcText);
    localStorage.setItem("dadosProjeto", dadosJSON); 
    window.location.href = "/src/Projeto/Gestao projetos/GestaoProjeto.html";
  }