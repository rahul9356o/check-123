
const player1 ={
    name: "rahul",
    lastName: "nalawade",
    batNumber: 5

}
const player2 = {
    name: "Abhishek",
    lastName: "nalawade",
    batNumber: 7

}

const p = function (x, y) {
    console.log(this);
    console.log(x + y);
    console.log(`${this.name +" "+ this.lastName} come with bat no. ${this.batNumber}`);
    
}


p.apply(player2,[10, 20]);