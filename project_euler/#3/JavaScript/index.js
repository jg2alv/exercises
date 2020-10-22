function main() {
    const n = 600851475143;
    let largest = [];

    for (let i = 1; i < n; i++)
        if (n % i === 0)
            largest.push(i);

    largest = largest.filter(n => [1, 2, 3, 5, 7].includes(n) || (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0));
    largest.forEach(n => {
        const j = n / 2;
        for (let i = 2; i <= j; i++)
            if (n % i === 0) return;

        largest = n > 1 ? n : largest;
    });

    return largest;
}

console.log(main());