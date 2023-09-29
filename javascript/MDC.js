function calcularMdc(a, b) {
			
	
	while (b != 0) {
		var r = a % b;
		a = b;
		b = r;
	}
	
	console.log("O máximo divisor comum é: " + a)
}

calcularMdc(10, 30)
