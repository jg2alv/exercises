package main

import (
	"fmt"
	"sort"
)

type user struct {
	First   string
	Last    string
	Age     int
	Sayings []string
}

type porIdade []user

func (p porIdade) Len() int { return len(p) }
func (p porIdade) Less(i, j int) bool { return p[i].Age < p[j].Age }
func (p porIdade) Swap(i, j int) { p[i], p[j] = p[j], p[i] }

type porSobrenome []user

func (s porSobrenome) Len() int { return len(s) }
func (s porSobrenome) Less(i, j int) bool { return s[i].Last < s[j].Last }
func (s porSobrenome) Swap(i, j int) { s[i], s[j] = s[j], s[i] }

func main() {
	u1 := user{
		First: "James",
		Last:  "Bond",
		Age:   32,
		Sayings: []string{
			"Shaken, not stirred",
			"Youth is no guarantee of innovation",
			"In his majesty's royal service",
		},
	}

	u2 := user{
		First: "Miss",
		Last:  "Moneypenny",
		Age:   27,
		Sayings: []string{
			"James, it is soo good to see you",
			"Would you like me to take care of that for you, James?",
			"I would really prefer to be a secret agent myself.",
		},
	}

	u3 := user{
		First: "M",
		Last:  "Hmmmm",
		Age:   54,
		Sayings: []string{
			"Oh, James. You didn't.",
			"Dear God, what has James done now?",
			"Can someone please tell me where James Bond is?",
		},
	}

	users := []user{u1, u2, u3}

	for _, v := range users {
		sort.Strings(v.Sayings)
	}

	sort.Sort(porIdade(users))
	fmt.Println("Ordenado por idade:")
	harmoniosa(users)

	sort.Sort(porSobrenome(users))
	fmt.Println("Ordenado por sobrenome:")
	harmoniosa(users)
}

func harmoniosa(x []user) {
	for i, v := range x {
		fmt.Println(i, "\tIdade:", v.Age, "\tNome completo:", v.First, v.Last)
		for _, c := range v.Sayings {
			fmt.Println("\t", c)
		}
		fmt.Println()

	}
}