package main

import "fmt"

type veiculo struct {
	portas	int
	cor		string
}

type caminhonete struct {
	veiculo
	tracaoNasQuatro	bool
}

type sedan struct {
	veiculo
	modeloLuxo	bool
}

func main() {
	caminhonete1 := caminhonete{
		veiculo: veiculo{
			portas: 4,
			cor: 	"vermelha",
		},
		tracaoNasQuatro: true,
	}

	sedan1 := sedan{
		veiculo: veiculo{
			portas: 2,
			cor: "preto",
		},
		modeloLuxo: false,
	}

	fmt.Println(caminhonete1, sedan1)
	fmt.Println(caminhonete1.tracaoNasQuatro, sedan1.modeloLuxo)
}