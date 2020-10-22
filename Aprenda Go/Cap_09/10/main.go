package main

import "fmt"

func main() {
	_map := map[string][]string{
		"1_nome": {
			"hobby 1",
			"hobby 2",
			"hobby 3",
		},
		"2_nome": {
			"hobby 1",
			"hobby 2",
			"hobby 3",
		},
		"3_nome": {
			"hobby 1",
			"hobby 2",
			"hobby 3",
		},
	}

	_map["4_nome"] = []string{
		"hobby 1",
		"hobby 2",
		"hobby 3",
	}

	delete(_map, "4_nome")

	for i, v := range _map {
		fmt.Println(i)

		for _, _v := range v {
			fmt.Printf("\t%v\n", _v)
		}

		fmt.Println()
	}
}
