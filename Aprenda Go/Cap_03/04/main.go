package main

import "fmt"

type myCustomType int
var x myCustomType

func main() {
	fmt.Printf("%v\t%T\n", x, x)
	x = 42
	fmt.Println(x)
}