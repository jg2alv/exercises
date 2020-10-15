package main

import "fmt"

func main() {
	const (
		y1 = iota + 2021
		y2
		y3
		y4
	)

	fmt.Println(y1, y2, y3, y4)
}
