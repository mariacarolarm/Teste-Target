/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacci(number) {
  let a = 0, b = 1;

  while (b <= number) {
      if (b === number) {
          return true;
      }
      let temp = b;
      b = a + b;
      a = temp;
  }

  return false;
}

function checkFibonacci() {
  const number = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

  if (isNaN(number)) {
      console.log("Por favor, insira um número válido.");
      return;
  }

  if (isFibonacci(number)) {
      console.log(`O número ${number} PERTENCE à sequência de Fibonacci.`);
  } else {
      console.log(`O número ${number} NÃO PERTENCE à sequência de Fibonacci.`);
  }
}
