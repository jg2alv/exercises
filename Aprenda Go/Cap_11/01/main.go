package main

import "fmt"

type pessoa struct {
	nome      string
	sobrenome string
	sabores   []string
}

func main() {
	pessoa1 := pessoa{
		nome:      "Renata",
		sobrenome: "Pimentao",
		sabores:   []string{"pistache", "morango", "baunilha"},
	}

	pessoa2 := pessoa{"Frederico", "da Prussia", []string{"sabao em po", "pe de coelho", "feijao"}}

	fmt.Println(pessoa1.nome, pessoa1.sobrenome)
	for _, val := range pessoa1.sabores {
		fmt.Println("\t", val)
	}

	fmt.Println(pessoa2.nome, pessoa2.sobrenome)
	for _, val := range pessoa2.sabores {
		fmt.Println("\t", val)
	}

}
