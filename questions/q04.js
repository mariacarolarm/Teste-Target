/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

function calcularPercentuais(faturamentoPorEstado) {
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

  const percentuais = {};
  for (const estado in faturamentoPorEstado) {
      const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
      percentuais[estado] = percentual.toFixed(2);
  }

  return percentuais;
}
