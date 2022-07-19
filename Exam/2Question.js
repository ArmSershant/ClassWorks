// 2. Create a constructor function to produce calculator instances (+,-,*,? operations).

function Calculator(value, num) {
    //  this.value = 0;
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
console.log(calc.add(2));
// console.log(calc.add(5, 2));
