package main

import "fmt"

func main() {
	slice := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	for _, v := range slice {
		fmt.Println(v)
	}

	fmt.Printf("\n%T\n", slice)
}
