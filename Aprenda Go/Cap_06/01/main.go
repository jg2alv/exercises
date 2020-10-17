package main

import "fmt"

func main() {
	for i := 33; i < 123; i++ {
		fmt.Printf("Decimal: %d\nHex: %#x\nUnicode: %xU\n\n", i, i, i)
	}
}
