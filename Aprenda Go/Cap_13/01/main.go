package main

import "fmt"

func main() {
	fmt.Println(f1())
	fmt.Println(f2())
}

func f1() int {
	return 0
}

func f2() (int, string) {
	return 0, "abc"
}