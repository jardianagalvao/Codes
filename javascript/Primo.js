function verificarPrimo() {
 
  // Verificar se o número é primo
  let primo = true;
  if (numero <= 1) {
    primo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
  }
  
  // Exibir o resultado para o usuário
  let resultado = '';
  if (primo) {
    resultado.innerHTML = `${numero} é primo!`;
  } else {
    resultado.innerHTML = `${numero} não é primo.`;
  }

  console.log(resultado);
}

verificarPrimo(10)