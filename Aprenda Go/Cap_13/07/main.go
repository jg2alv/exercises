package main

import "fmt"

func main() {
	x := func() {
		fmt.Println("hello, world!")
	}

	x()
}