package main

import "fmt"

func main() {
	defer fmt.Println("first")
	fmt.Println("second")
}