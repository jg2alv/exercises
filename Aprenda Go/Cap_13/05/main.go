package main

import "fmt"

type quadrado struct{
	altura, largura float64
}

type circulo struct{
	raio float64
}

type figura interface{
	area() float64
}

func (q quadrado) area() float64 {
	return q.altura * q.largura
}

func (c circulo) area() float64 {
	return 3.1415 * c.raio * c.raio
}

func info(f figura) float64 {
	return f.area()
}

func main() {
	q := quadrado{
		altura: 10,
		largura: 10,
	}

	c := circulo{
		raio: 10,
	}

	fmt.Println(info(q))
	fmt.Println(info(c))
}