import math

def main():
    n = 600851475143
    largest = []
    notPrime = None

    for i in range(1, n - 1):
        if n % i == 0:
            largest.append(i)

    largest = filter(lambda n: n in [1, 2, 3, 5, 7] or (n % 2 != 0 and n % 3 != 0 and n % 5 != 0 and n % 7 != 0), largest)
    for n in largest:
        j = n / 2
        for i in range(2, int(math.floor(j))):
            if n % i == 0:
                notPrime = True

        if notPrime != None:
            continue

        largest = n if n > 1 else largest
    
    return largest

if (__name__ == '__main__'):
    print(main())