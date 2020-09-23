using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    int _max;
    int _min;
    int _guess;
    int _tries;


    // Start is called before the first frame update
    void Start()
    {
        this._max = 1000;
        this._min = 1;
        this._guess = (this._max + this._min) / 2;

        Debug.Log($"Welcome to the Number Wizard!\nThink of a number between {this._min} and {this._max} and I'll guess it.");
        Debug.Log("Almost forgot: press the up arrow if the number I say is higher than your guess,\nthe down arrow if it's lower\nand the enter key if they're equal.");
        GetInput();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyUp(KeyCode.UpArrow))
            this._min = this._guess;
        else if (Input.GetKeyUp(KeyCode.DownArrow))
            this._max = this._guess;
        else if (Input.GetKeyUp(KeyCode.Return) || this._max == this._min)
        {
            Debug.Log($"I see your number is {this._guess}. I took {this._tries} attempts to find it!");
            return;
        }
        else return;

        this._guess = (this._max + this._min) / 2;
        GetInput();
    }

    void GetInput()
    {
        Debug.Log($"I guess your number is {this._guess}");
        this._tries++;
    }
}
