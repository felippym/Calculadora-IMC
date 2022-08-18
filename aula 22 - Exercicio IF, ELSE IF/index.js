/*

Entre 0 - 11  = bom dia
entre 12 - 17 = boa tarde
entre 18 - 23 = boa noite
*/
/*
const hora = 24;

if (hora <= 11) {
  console.log("bom dia");
} else if (hora > 11 && hora <= 17) {
  console.log("boa tarde");
} else if (hora > 18 && hora <= 23) {
  console.log("boa noite");
} else if (hora > 23 || hora < 0) {
  console.log("digite um horário valido");
}
*/

function educado() {
  let horaDigitada = prompt("Digite uma hora");

  function checkifinputisvalid() {
    // se clicar em cancelar

    let resultado;

    if (horaDigitada == null) {
      resultado = false;
    } else {
      resultado = true;
    }
    return resultado;
  }

  if (checkifinputisvalid() == false) {
    alert("Voce PRECISA digitar");
    educado();
    return;
  }

  horaDigitada = Number(horaDigitada);

  const hora = document.querySelector(".hora");
  let cumprimento = document.querySelector(".cumprimento");

  hora.innerHTML = horaDigitada;

  if (horaDigitada >= 7 && horaDigitada <= 11) {
    cumprimento.innerHTML = "Tenha um BOM DIA!";
  } else if (horaDigitada >= 12 && horaDigitada <= 17) {
    cumprimento.innerHTML = "Tenha uma BOA TARDE";
  } else if (horaDigitada >= 18 && horaDigitada <= 23) {
    cumprimento.innerHTML = "Tenha uma BOA NOITE";
  } else if (horaDigitada >= 0 && horaDigitada <= 6) {
    cumprimento.innerHTML = "VAI DORMIR VAGABUNDO!!";
  } else if (
    horaDigitada < 0 ||
    horaDigitada > 23 ||
    isNaN(horaDigitada) ||
    horaDigitada === "" //se nao digitar nada
  ) {
    alert("digita certo mongoloide");
    hora.innerHTML = "";
    educado();
  }
}

educado();

const botao = document.querySelector(".botao");

botao.addEventListener("click", educado);
