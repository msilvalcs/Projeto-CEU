// Dados dos integrantes
const integrantes = [
  {
    nome: "Integrante",
    foto: "https://fakeimg.pl/200x200/",
    descricao: "Descrição do perfil do Integrante.",
  },
  {
    nome: "Integrante",
    foto: "https://fakeimg.pl/200x200/",
    descricao: "Descrição do perfil do Integrante.",
  },
  {
    nome: "Integrante",
    foto: "https://fakeimg.pl/200x200/",
    descricao: "Descrição do perfil do Integrante.",
  },
  // Adicione mais integrantes conforme necessário
];

// Função para exibir os integrantes
function exibirIntegrantes() {
  const quadro = document.querySelector(".quadro");

  // Limpar o conteúdo atual do quadro
  quadro.innerHTML = "";

  integrantes.forEach((integrante) => {
    const { nome, foto, descricao } = integrante;

    // Criar elemento de integrante
    const integranteDiv = document.createElement("div");
    integranteDiv.classList.add("integrante");

    // Adicionar foto do integrante
    const fotoImg = document.createElement("img");
    fotoImg.classList.add("foto");
    fotoImg.src = foto;
    fotoImg.alt = `Foto do ${nome}`;
    integranteDiv.appendChild(fotoImg);

    // Adicionar nome do integrante
    const nomeDiv = document.createElement("div");
    nomeDiv.classList.add("nome");
    nomeDiv.textContent = nome;
    integranteDiv.appendChild(nomeDiv);

    // Adicionar descrição do perfil
    const descricaoDiv = document.createElement("div");
    descricaoDiv.classList.add("descricao");
    descricaoDiv.textContent = descricao;
    integranteDiv.appendChild(descricaoDiv);

    // Adicionar botão de remover
    const removerBtn = document.createElement("button");
    removerBtn.classList.add("remover");
    removerBtn.textContent = "Remover";
    integranteDiv.appendChild(removerBtn);

    // Adicionar evento de clique para remover o integrante
    removerBtn.addEventListener("click", () => {
      const confirmacao = confirm(`Tem certeza que deseja remover ${nome}?`);
      if (confirmacao) {
        integranteDiv.remove();
      }
    });

    quadro.appendChild(integranteDiv);
  });
}

// Chamar a função para exibir os integrantes ao carregar a página
window.addEventListener("DOMContentLoaded", exibirIntegrantes);
