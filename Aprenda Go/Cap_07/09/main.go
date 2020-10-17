package main

import "fmt"

func main() {
	esporteFavorito := "fencing"
	fmt.Print("it seems you like ")

	switch esporteFavorito {
	case "football":
		fmt.Println("football!")

	case "baseball":
		fmt.Println("baseball!")

	case "fencing":
		fmt.Println("fencing!")

	default:
		fmt.Println("nothing at all!")
	}
}
