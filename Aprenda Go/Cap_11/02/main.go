package main

import "fmt"

type pessoa struct {
	nome      string
	sobrenome string
	sabores   []string
}

func main() {
	meumapa := make(map[string]pessoa)
	meumapa["Pimentao"] = pessoa{
		nome:      "Renata",
		sobrenome: "Pimentao",
		sabores:   []string{"pistache", "morango", "baunilha"},
	}
	meumapa["da Prussia"] = pessoa{"Frederico", "da Prussia", []string{"sabao em po", "pe de coelho", "feijao"}}

	for _, valor := range meumapa {
		fmt.Println("Meu nome eh", valor.nome, "e meus sorvetes favoritos sao:")
		for _, valor := range valor.sabores {
			fmt.Println("-", valor)
		}

		fmt.Println()
	}

}
