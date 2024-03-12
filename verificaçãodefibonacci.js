function verificarFibonacci(num) {
    let a = 0;
    let b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === num || num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

let numero = parseInt(prompt("Digite um número: "));

let h1 = document.querySelector('h1')
h1.textContent = verificarFibonacci(numero);

