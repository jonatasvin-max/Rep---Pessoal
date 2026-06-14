const nomeEl = document.getElementById("nomePerfil");
const cursoEl = document.getElementById("cursoPerfil");
const fotoEl = document.getElementById("fotoPerfil");
const perfilEl = document.getElementById("perfil");
const bioEl = document.getElementById("biografiaPerfil");
const emailResumoEl = document.getElementById("emailExibido");
const telResumoEl = document.getElementById("telefoneExibido");
const contadorEl = document.getElementById("contadorAcoes");
const ultimaAcaoEl = document.getElementById("ultimaAcao");

const estadoInicial = {
  nome: nomeEl.textContent,
  curso: cursoEl.textContent,
  foto: fotoEl.src,
  bio: bioEl.textContent
};

let totalAcoes = 0;

function atualizarEstatisticas(acao) {
  totalAcoes++;
  contadorEl.textContent = totalAcoes;
  ultimaAcaoEl.textContent = acao;
}

document.getElementById("btnAlterarNome").addEventListener("click", () => {
  nomeEl.textContent = "Maria Oliveira";
  atualizarEstatisticas("Alteração de nome");
});

document.getElementById("btnAlterarCurso").addEventListener("click", () => {
  cursoEl.textContent = "Curso: Análise e Desenvolvimento de Sistemas";
  atualizarEstatisticas("Alteração de curso");
});

document.getElementById("btnAlterarFoto").addEventListener("click", () => {
  fotoEl.src = "images/perfil2.jpg";
  atualizarEstatisticas("Alteração de foto");
});

document.getElementById("btnDestacarPerfil").addEventListener("click", () => {
  perfilEl.classList.add("destaque");
  atualizarEstatisticas("Perfil destacado");
});

document.getElementById("btnRestaurar").addEventListener("click", () => {
  nomeEl.textContent = estadoInicial.nome;
  cursoEl.textContent = estadoInicial.curso;
  fotoEl.src = estadoInicial.foto;
  bioEl.textContent = estadoInicial.bio;
  perfilEl.classList.remove("destaque");
  atualizarEstatisticas("Perfil restaurado");
});

document.getElementById("temaSelect").addEventListener("change", (e) => {
  document.body.className = "";
  document.body.classList.add(e.target.value);
  atualizarEstatisticas("Tema alterado para " + e.target.value);
});

const fonteRange = document.getElementById("fonteRange");
const fonteValor = document.getElementById("valorFonte");

fonteRange.addEventListener("input", () => {
  bioEl.style.fontSize = fonteRange.value + "px";
  fonteValor.textContent = fonteRange.value + "px";
  atualizarEstatisticas("Fonte ajustada");
});

document.getElementById("mostrarBio").addEventListener("change", (e) => {
  bioEl.style.display = e.target.checked ? "block" : "none";
  atualizarEstatisticas("Exibir/Ocultar biografia");
});

document.getElementById("btnAtualizarContato").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const telefone = document.getElementById("telefoneInput").value;
  emailResumoEl.textContent = "E-mail: " + (email || "não informado");
  telResumoEl.textContent = "Telefone: " + (telefone || "não informado");
  atualizarEstatisticas("Contato atualizado");
});
