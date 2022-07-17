// create a counter function with increment and decrement for a Number
function counter(number) {
    this.number = number;
    this.increment = function() {
        number++;
    }
    this.decrement = function() {
        number--;
    }
    this.getCount = function() {
        return number;
    }
}
counter = new counter(10);
counter.increment();
counter.decrement();
counter.decrement();
let count = counter.getCount();
console.log(count);