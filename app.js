alert('Bem vindo ao jogo secreto...');
let numeroS = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 0;
console.log(numeroS)

while(chute != numeroS) {
    chute = prompt('Digite seu chute de 0 a 100: ');
    tentativas++;

    if(chute == numeroS) {
        break;
    } else {
        if(chute > numeroS) {
            alert('O numero secreto eh menor que '+ chute);
        } else {
            alert('O numero secreto eh maior do que '+ chute);
        }
    }
}

let palavratentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
alert('Parabens voce acertou o numero secreto '+ numeroS+ ' com '+ tentativas + palavratentativas);