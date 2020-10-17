package main

import "fmt"

func main() {
	switch {
	case true:
		fmt.Println("it's true!")
		fallthrough

	default:
		fmt.Println("it fell through!")
	}
}
