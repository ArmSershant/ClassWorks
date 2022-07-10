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
        } else {
            console.log("Friend " + `${friend.name}` + " already exists in " + `${this.name}` + " friend list");
        };
    };
    this.searchFriends = function (friends) {
        if  (friends.name === this.hasFriend.friend) {
            console.log("No friends found");
        } else {
            console.log("Friends found: " + this.friends.map(elem => elem.name).join(", "));
        }
    }
}

const John = new Person(1, "John");
const Mary = new Person(2, "Mary");
const Mark = new Person(3, "Mark");
Mark.addfriend(Mary);
Mark.addfriend(John);
Mark.addfriend(John);
const Johns = Mark.searchFriends({name: "John"});
console.log(Johns);