package main

import "fmt"

func main() {
	x := f1()
	x()
}

func f1() func() {
	return func() {
		fmt.Println("hello, world!")
	}
}