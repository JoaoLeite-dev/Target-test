const faturamentoMensal = require('./index_3.json');


function processarFaturamento(dadosFaturamento) {
  const diasComFaturamento = dadosFaturamento.filter(dia => dia.valor > 0);

  const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
  const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

  const totalFaturamento = diasComFaturamento.reduce((acumulador, dia) => acumulador + dia.valor, 0);
  const mediaFaturamento = totalFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia
  };
}

const resultado = processarFaturamento(faturamentoMensal);

console.log("Menor valor de faturamento:", resultado.menorFaturamento.toFixed(2)); // toFixed(2) para arredondar para 2 casas decimais
console.log("Maior valor de faturamento:", resultado.maiorFaturamento.toFixed(2));
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
