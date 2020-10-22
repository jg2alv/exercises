'''
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
'''

def main():
    palindrome = None
    i = 1

    while len(str(i)) <= 3:
        j = 1
        while len(str(j)) <= 3:
            result = i * j
            if int(str(result)[::-1]) == result:
                palindrome = "{} ({} x {})".format(result, i, j)
            j += 1
        i += 1

    return palindrome

if __name__ == '__main__':
    print(main())