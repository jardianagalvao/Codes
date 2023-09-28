function Sequenciagerar(n) {
   
    // Inicializar a sequência com os primeiros dois termos
    var seq = [0, 1];
    
    // Gerar os demais termos da sequência
    for (var i = 2; i < n; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    
    console.log(seq);}

Sequenciagerar(10)