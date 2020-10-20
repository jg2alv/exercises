using System;
using System.Collections.Generic;

public enum Allergen
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128
}

public class Allergies
{
    private readonly List<Allergen> _allergy = new List<Allergen>();

    public Allergies(int mask)
    {
        foreach (Allergen a in Enum.GetValues(typeof(Allergen)))
        {
            if ((mask & (int)a) != (int)a) continue;

            this._allergy.Add(a);
        }
    }

    public bool IsAllergicTo(Allergen allergen) => this._allergy.Contains(allergen);

    public Allergen[] List() => this._allergy.ToArray();
}