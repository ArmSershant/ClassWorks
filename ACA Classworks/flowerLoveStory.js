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

function Flower(type, color){
    this.type = type;
    this.color = color;
}

function FlowerShop(flowers) {
    this.flowers = [
        new Flower("rose", "red"),
        new Flower("tulip", "yellow"),
        new Flower("lily", "blue")
    ];
    this.sellFlower = function(flower) {
        index = this.findFlowerIndex(color,type);
        return this.giveFlower(index);
        return this.flowers.pop(flower);
    }
    this.findFlowerIndex = function(color, type){
        for (flower of this.flowers) {
        return this.flowers.findIndex(flower => flower.color === color && flower.type === type);
        };
    }
    this.giveFlower = function(index) {
        return this.flowers.splice(index, 1);
    };
}

function Order(color, type) {
    this.color = color;
    this.type = type;
}

const boy = new Person("Vardges", "male");
const girl = new Person("Mariam", "female");

const flowerShop = new FlowerShop();
const flower = flowerShop.sellFlower("red", "rose");
boy.buyFlower(flower);
const gift = boy.giveFlower(flower);
girl.takeFlower(flower)

console.log(boy.flower);
console.log(girl.flower);
