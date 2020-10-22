def Fibonacci(n):
    if n < 0:
        return -1
    elif n == 0 or n == 1:
        return 1
    
    return Fibonacci(n - 1) + Fibonacci(n - 2)

def main():
    total = 0
    n = 1
    fib = Fibonacci(n)

    while fib < 4000000:
        total += fib if n % 2 == 0 else 0
        n += 1
        fib = Fibonacci(n)

    return total



if __name__ == '__main__':
    print(main())