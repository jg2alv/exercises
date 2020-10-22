package main

import "fmt"

func main() {
	arr := [5]int{1,2,3,4,5}

	for _, v := range arr {
		fmt.Println(v)
	}

	fmt.Printf("\n%T\n", arr)
}
