package main

import "fmt"

func main() {
	r1 := f1()
	fmt.Println(r1(), r1(), r1())

	r2 := f1()
	fmt.Println(r2(), r2(), r2())
}

func f1() func() int {
	x := 0

	return func() int {
		x++
		return x
	}
}