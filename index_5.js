function inverterString(valor) {
  let resultado = '';

  for (let i = valor.length - 1; i >= 0; i--) {
    resultado += valor[i];
  } // adiciona invertendo a string

  return resultado;
}

const minhaString = "Quero ser contratado rsrs";
const stringInvertida = inverterString(minhaString);

console.log("Valor inicial:", minhaString);
console.log("Valor final:", stringInvertida);
