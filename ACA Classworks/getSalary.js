// create a function that set salary for the user
function User(name, age){
    this.name = name;
    this.age = age;
    this.setSalary = function(salary){
        this.salary = salary;
    }
    this.getSalary = function(){
        return this.salary;
    }
}
let user = new User('John', 30);
user.getSalary(15000);
console.log(user)