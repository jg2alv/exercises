package main

import "fmt"

type pessoa struct{
	nome		string
	sobrenome	string
	idade		int
}

func (p pessoa) info() {
	fmt.Println("meu nome eh", p.nome, p.sobrenome, "e tenho", p.idade, "anos")
}

func main() {
	p := pessoa{
		nome: "Alan",
		sobrenome: "Dylan",
		idade: 69,
	}

	p.info()
}