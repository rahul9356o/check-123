
const player1 = {
    name: "rahul",
    lastName: "nalawade",
    batNumber: 5

}
const player2 = {
    name: "Abhishek",
    lastName: "nalawade",
    batNumber: 7

}

const players = function () {
    console.log(this);
    console.log(`${this.name + " " + this.lastName} come with bat no. ${this.batNumber}`);

}

const newPlayerRahul = players.bind(player1);

newPlayerRahul();

const newPlayerAbhishek = players.bind(player2);

newPlayerAbhishek();
