package main

import "fmt"

type myCustomType int
var x myCustomType
var y int

func main() {
	fmt.Printf("%v\t%T\n", x, x)
	x = 42
	fmt.Println(x)
	y = int(x)
	fmt.Printf("%v\t%T\n", y, y)
}