let numeroSecreto;
let tentativas;
let historico = [];
const max = 100;

const chuteInput = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const tentativasTxt = document.getElementById("tentativas");
const historicoTxt = document.getElementById("historico");
const btnChutar = document.getElementById("btnChutar");
const btnReset = document.getElementById("btnReset");

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * max) + 1;
  tentativas = 0;
  historico = [];
  mensagem.textContent = "";
  tentativasTxt.textContent = "";
  historicoTxt.textContent = "";
  chuteInput.value = "";
  chuteInput.disabled = false;
  btnChutar.disabled = false;
  btnReset.style.display = "none";
  console.log("Número secreto:", numeroSecreto); // debug
}

btnChutar.addEventListener("click", () => {
  const chute = Number(chuteInput.value);

  if (!chute || chute < 1 || chute > max) {
    mensagem.textContent = "⚠️ Digite um número válido entre 1 e " + max;
    return;
  }

  tentativas++;
  historico.push(chute);

  if (chute === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
    tentativasTxt.textContent = `Foram ${tentativas} tentativa(s).`;
    chuteInput.disabled = true;
    btnChutar.disabled = true;
    btnReset.style.display = "inline-block";
  } else if (chute > numeroSecreto) {
    mensagem.textContent = "🔽 O número secreto é menor!";
  } else {
    mensagem.textContent = "🔼 O número secreto é maior!";
  }

  historicoTxt.textContent = "Seus palpites: " + historico.join(", ");
  chuteInput.value = "";
  chuteInput.focus();
});

btnReset.addEventListener("click", iniciarJogo);

iniciarJogo();
