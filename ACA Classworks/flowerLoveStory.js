//Person
//Bucket //Flower
//Shop
function Person(name , gender) {
    this.name = undefined;
    this.gender = undefined;
    this.bucket = null;
    this.buyFlower = function(flower) {
        this.flower = flower;
    };
    this.giveFlower = function() {
        const flower = this.flower;
        this.flower = null;
        return flower;
    };
    this.takeFlower = function() {
        this.flower = flower;
    };
}

function FlowerShop(flowers) {
    this.flowers = [
        new Flower("rose", "red"),
        new Flower("tulip", "yellow"),
        new Flower("lily", "blue")
    ];
    this.sellFlower = function(flower) {
        return this.flowers.pop(flower);
    }
}

function Flower(type,color){
    this.type = type;
    this.color = color;
}
const boy = new Person("Vardges", "male");
const girl = new Person("Mariam", "female");

const flowerShop = new FlowerShop();
const flower = flowerShop.sellFlower();
boy.buyFlower(flower);
const gift = boy.giveFlower(flower);
girl.takeFlower(flower)

console.log(boy.flower);
console.log(girl.flower);
