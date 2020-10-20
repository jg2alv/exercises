using System;
using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private readonly List<int> _scores;

    public HighScores(List<int> list)
    {
        this._scores = list;
    }

    public List<int> Scores() => this._scores;

    public int Latest() => this._scores.Last();

    public int PersonalBest() => this._scores.Max();

    public List<int> PersonalTopThree() => this._scores.Count >= 3 ? this._scores.OrderByDescending(x => x).ToList().GetRange(0, 3) : this._scores.OrderByDescending(x => x).ToList();
}