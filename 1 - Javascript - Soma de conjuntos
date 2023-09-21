let numeros = [];

function adicionarNumero() {
  let numero = parseInt(prompt("Digite um número: "));
  numeros.push(numero);
}

function adicionarConjunto() {
  let conjunto = prompt("Digite o conjunto de números separados por espaço: ");
  let numerosString = conjunto.split(" ");
  for (let i = 0; i < numerosString.length; i++) {
    let num = parseInt(numerosString[i]);
    numeros.push(num);
  }
}

function calcularSoma() {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  alert("A soma dos números é: " + soma);
}

let opcao;
do {
  opcao = parseInt(prompt("Escolha uma opção:\n1 - Adicionar número\n2 - Calcular a soma dos números\n0 - Sair"));
  switch(opcao) {
    case 1:
      adicionarNumero();
      break;
      
    case 2:
      calcularSoma();
      break;
      
    case 0:
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção inválida, tente novamente.");
  }
} while (opcao != 0);
