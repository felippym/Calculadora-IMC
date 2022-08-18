function CalculoIMC(evento) {
  evento.preventDefault();

  const form = document.querySelector(".form");
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");
  let resultado = form.querySelector(".resultado");

  if (peso.value <= 0) {
    alert("tu é mongol?");

    return;
  }
  if (altura.value <= 0) {
    alert("tu é mongol?");
    return;
  }

  const imc = peso.value / (altura.value * altura.value);

  if (imc < 18.5) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Abaixo do peso!)`;
    resultado.style.backgroundColor = "#ebb0bd";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Peso Normal!)`;
    resultado.style.backgroundColor = "aqua";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Sobrepeso!)`;
    resultado.style.backgroundColor = "#ebb0bd";
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Obesidade Grau 1)`;
    resultado.style.backgroundColor = "#e4899c";
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Obesidade Grau 2!)`;
    resultado.style.backgroundColor = "#e65474";
  } else if (imc > 40) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - (Obesidade Grau 3!)`;
    resultado.style.backgroundColor = "#e71f4b";
  }
}

const botao = document.querySelector(".form");

botao.addEventListener("submit", CalculoIMC);
