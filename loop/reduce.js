
const myNum = [ 1, 2, 3, 4, 5 ]


// const myTotal =  myNum.reduce( function( acc, currval){

//     console.log(`acc is ${acc} and curentvalue is ${currval}`);

//     return acc + currval

// },0 )

// console.log(myTotal);


const myTotal = myNum.reduce( ( acc, currval) => acc + currval ,0)

console.log(myTotal);
