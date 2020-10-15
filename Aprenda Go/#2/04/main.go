package main

import "fmt"

func main() {
	x := 10
	fmt.Printf("%d %#b %#x\n", x, x, x)
	y := x << 1
	fmt.Printf("%d %#b %#x\n", y, y, y)
}
