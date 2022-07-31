// const human = {
//     name: 'John',
//     sayName: function () {
//         console.log(this.name);
//     }
// }
// let developer = {
//     name : 'Edgar',
//     writeCode: function () {
//         console.log("Writing code");
//     }
// }
// developer.writeCode();
// human.sayName();
class Human {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class Developer extends Human {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    writeCode() {
        console.log("Writing code");
    }
}
const developer = new Developer('Edgar', 'JavaScript');
developer.sayName();
developer.writeCode();
console.log(developer);
// create with class constructor set notification (alert,mail,message etc) and use getTitle getBody methods.