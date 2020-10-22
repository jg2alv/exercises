package main

import "fmt"

func main() {
	slice := [][]string{
		{"Nome 1", "Sobrenome 1", "Hobby 1"},
		{"Nome 2", "Sobrenome 2", "Hobby 2"},
		{"Nome 3", "Sobrenome 3", "Hobby 3"},
	}

	for _, v := range slice {
		for _, _v := range v {
			fmt.Println(_v)
		}

		fmt.Println()
	}
}
