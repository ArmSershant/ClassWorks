const human = {
    name: 'John',
    sayName: function () {
        console.log(this.name);
    }
}
let developer = {
    name : 'Edgar',
    writeCode: function () {
        console.log("Writing code");
    }
}
developer.writeCode();
human.sayName(); 