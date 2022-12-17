package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	fmt.Println(f1(nums...))
	fmt.Println(f2(nums))
}

func f1(nums ...int) int {
	sum := 0
	for _, v := range nums {
		sum += v
	}

	return sum
}

func f2(nums []int) int {
	sum := 0
	for _, v := range nums {
		sum += v
	}

	return sum
}
