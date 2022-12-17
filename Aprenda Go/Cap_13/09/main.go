package main

import "fmt"

func main() {
	f1(func(){
		fmt.Println("hello, world!")
	})
}

func f1(f2 func()) {
	f2()
}