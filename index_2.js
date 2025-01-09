const valor = 22;

function verificaFibonacci(numero) {
  if (numero < 0) return false;

  let anterior = 0, atual = 1;

  while (anterior < numero) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return anterior === numero;
}


if (verificaFibonacci(valor)) {
  console.log(`O número ${valor} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${valor} NÃO pertence à sequência de Fibonacci.`);
} // validação 