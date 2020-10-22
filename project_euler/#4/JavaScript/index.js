function main() {
    let palindrome;

    for (let i = 1; String(i).length <= 3; i++) {
        for (let j = 1; String(j).length <= 3; j++) {
            const result = i * j;
            if (String(result).split('').reverse().join('') == result)
                palindrome = `${result} (${i} x ${j})`;
        }
    }

    return palindrome;
}

console.log(main());