// 2. Create a constructor function to produce calculator instances (+,-,*,? operations).

function Calculator() {
     this.value = 2;
    this.add = function (num) {
        this.value += num;
    }
    this.subtract = function (num) {
        this.value -= num;
    }
    this.multiply = function (num) {
        this.value *= num;
    }
    this.divide = function (num) {
        this.value /= num;
    }
}
let calc = new Calculator();
calc.add(1);
console.log(calc.value);
calc.subtract(4);
console.log(calc.value);