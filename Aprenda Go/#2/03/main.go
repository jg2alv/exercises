package main

import "fmt"

func main() {
	const nontyped = 10
	const typed int = 10

	fmt.Println(nontyped, typed)
}