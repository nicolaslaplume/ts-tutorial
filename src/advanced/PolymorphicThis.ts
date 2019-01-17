
class Calculator {
    constructor(protected _value = 0){}

    getValue(){
        return this._value;
    }

    sum(n:number):this{
        this._value = this._value + n;
        return this;
    }
}

class ScientificCalculator extends Calculator{
    sin():this{
        this._value = Math.sin(this._value);
        return this;
    }
}


let calc = new ScientificCalculator();
calc.sin().sum(20).sin()