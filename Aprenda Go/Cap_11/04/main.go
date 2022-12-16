package main

import "fmt"

func main() {
	x := struct {
		nome      string
		sabor     string
		ondetem   []string
		vaibemcom map[string]string
	}{
		nome:    "Stroopwafel",
		sabor:   "doce",
		ondetem: []string{"na Holanda", "na casa do seu tio rico"},
		vaibemcom: map[string]string{
			"no cafe da manhã": "cha",
			"no almoco":        "cafezinho",
			"na janta":         "nao vai bem pq comer doce a noite engorda",
		},
	}

	fmt.Println(x)

}
