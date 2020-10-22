function main() {
    let total = 0;

    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            total += i;
    }

    return total;
}

console.log(main());