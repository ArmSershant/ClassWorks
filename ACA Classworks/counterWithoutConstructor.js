const counter = {count: 0};
counter.increment = function () {
  this.count++;
}
counter.decrement = function () {
  this.count--;
}
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);