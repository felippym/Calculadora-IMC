let num1 = 9.633484;
let num2 = Math.floor(num1); // arredonda pra baixo

let num3 = Math.ceil(num1); // arredonda pra cima

let num4 = Math.ceil(num1); // arredonda normalmente

//console.log(num2);

function numeroaleatorio(min, max) {
  let chloe = Math.round(Math.random() * (max - min) + min);

  let pato = chloe + 5;

  return pato;
}

let patinho = numeroaleatorio(1, 10);

console.log(patinho);
