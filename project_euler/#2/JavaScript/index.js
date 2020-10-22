function main() {
    const Fibonacci = n => n < 0 ? -1 : n === 0 || n === 1 ? 1 : Fibonacci(n - 1) + Fibonacci(n - 2);
    let total = 0,
        n = 1,
        fib;

    while ((fib = Fibonacci(n)) < 4000000) {
        total += n % 2 === 0 ? fib : 0;
        n++;
    }

    return total;
}

console.log(main());