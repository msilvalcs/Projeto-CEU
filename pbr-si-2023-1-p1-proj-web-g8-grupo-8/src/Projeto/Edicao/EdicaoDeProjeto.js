function CadastrarProjeto() {
  var nomeProjeto = document.getElementById("nomeProjeto").value;
  var descricaoProjeto = document.getElementById("descricaoProjeto").value;
  var dataInicio = document.getElementById("dataInicio").value;
  var cargaHoraria = document.getElementById("anexarPDF").value;
  var turno = document.getElementById("anexarPDF").value;
  var modalidade = document.getElementById("anexarPDF").value;
  var numeroIntegrantes = document.getElementById("numeroIntegrantes").value;
  var anexarPDF = document.getElementById("anexarPDF").value;
  var projectImage = document.getElementById("projectImage").value;

  var projetcText = {
      nomeProjeto: nomeProjeto,
      descricaoProjeto: descricaoProjeto,
      dataInicio: dataInicio,
      cargaHoraria: cargaHoraria,
      turno: turno,
      modalidade: modalidade,
      numeroIntegrantes: numeroIntegrantes,
      anexarPDF: anexarPDF,
      projectImage: projectImage,
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
      
      var dadosJSON = JSON.stringify(projetcText);
      localStorage.setItem("dadosProjeto", dadosJSON);
      window.location.href = "/pbr-si-2023-1-p1-proj-web-g8-grupo-8-develop/src/Projeto/Gestao projetos/GestaoProjeto.html";
    }

  $(document).ready(function() {
    // Inicializa o datepicker
    $("#start-date-picker, #end-date-picker").datepicker({
      format: "dd/mm/yyyy",
      autoclose: true,
      todayHighlight: true
    });
  
    // Atualiza o valor dos campos de data quando selecionado no datepicker
    $("#start-date-picker").on("changeDate", function(e) {
      $("#start-date").val(
        e.format("dd/mm/yyyy")
      );
    });
  
    $("#end-date-picker").on("changeDate", function(e) {
      $("#end-date").val(
        e.format("dd/mm/yyyy")
      );
    });
  });
  
  function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById("project-image-preview");
      output.src = reader.result;
      output.style.display = "block";
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  

  