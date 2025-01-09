const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularDistribuicaoPorEstado(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

  const distribuicaoPercentual = {};
  for (const [regiao, valor] of Object.entries(faturamento)) {
    distribuicaoPercentual[regiao] = ((valor / totalFaturamento) * 100).toFixed(2); // arredondar o resultado
  }

  return { totalFaturamento, distribuicaoPercentual };
}

const resultadoDistribuicao = calcularDistribuicaoPorEstado(faturamentoPorEstado);

console.log("Faturamento Total: R$", resultadoDistribuicao.totalFaturamento.toFixed(2));
console.log("Distribuição percentual por região:");
for (const [regiao, percentual] of Object.entries(resultadoDistribuicao.distribuicaoPercentual)) {
  console.log(`${regiao}: ${percentual}%`); // iterar sobre as propriedades e valores do objeto
}

