package main

import "fmt"

type pessoa struct{
	nome string
}

func main() {
	p := pessoa{
		nome: "carlos",
	}

	fmt.Println(p.nome)
	mudeMe(&p, "joao")
	fmt.Println(p.nome)
}

func mudeMe(p *pessoa, nome string) {
	p.nome = nome
	// the correct way is `(*p).nome = nome`
	
	// but there's the shortcut `p.nome`, which
	// works only if `p.nome` is a valid selector
}