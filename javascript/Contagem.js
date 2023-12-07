function contarValoresInteiros(conjuntoDeDados, N) {
  // Inicializa a contagem
  let contagem = 0;

  // Percorre o conjunto de dados
  for (let i = 0; i < conjuntoDeDados.length; i++) {
    // Verifica se o valor atual é um número inteiro entre 1 e N
    if (Number.isInteger(conjuntoDeDados[i]) && conjuntoDeDados[i] >= 1 && conjuntoDeDados[i] <= N) {
      contagem++;
    }
  }

  // Retorna o resultado da contagem
  return contagem;
}

// Exemplo de uso
const conjuntoDeDados = [3, 5, 2, 7, 1, 4, 6];
const N = 5;

const resultado = contarValoresInteiros(conjuntoDeDados, N);
console.log(`A contagem de valores inteiros entre 1 e ${N} é: ${resultado}`);
