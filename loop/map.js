
const myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = myArray.map( (num) => num + 10 )

// console.log(result);

// same in forEach 

myArray.forEach( (item) => {


    console.log(item + 10);

    return item + 10;

})

