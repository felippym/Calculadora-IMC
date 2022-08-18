function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
  let indice = 0;
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    if (nome.value == "") {
      alert("digita mongoloide");

      return;
    }

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    resultado.innerHTML += `<p> Os dados são: <br> Nome:${pessoas[indice].nome} <br> Sobrenome:${pessoas[indice].sobrenome} <br> Peso:${pessoas[indice].peso} <br> Altura:${pessoas[indice].altura}</p>`;

    ++indice;

    nome.value = "";
    sobrenome.value = "";
    peso.value = "";
    altura.value = "";
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
