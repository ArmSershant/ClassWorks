function Person(id, name){
    this.id = id;
    this.name = name;
    this.friends = [];
    this.hasFriend = function(person) {
        return this.friends.some(elem => elem.id === person.id)
    }
    this.addfriend = function(friend) {
        if (!this.hasFriend(friend)) {
        this.friends.push(friend);
        console.log( "Friend " + `${friend.name}`+ " added " + "to " + `${this.name}` + " friend list");
        };
    };
}

const John = new Person(1, "John");
const Mary = new Person(2, "Mary");
const Mark = new Person(3, "Mark");
Mark.addfriend(Mary);
console.log(Mark.hasFriend(John));
