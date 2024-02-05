function addNumber (){

//No Prametera passed in the function
    let result = 0;

    for(let i = 0; i < arguments.length; i++){

        result = result + arguments[i];
        //i Denotes Index Of Array 0-based
        // console.log(result);
    }
    return result;
}
//variable argument
console.log(addNumber(5,6,7));
console.log(addNumber(2,4,6,7,8,9));
console.log(addNumber());
