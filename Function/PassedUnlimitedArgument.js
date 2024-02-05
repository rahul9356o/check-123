function addNumber(...arguments) {

    let sum = 0;

    if (arguments.length === 0) {
        return 0;
    }
    else {
        for (let i = 0; i < arguments.length; i++) {

            sum += arguments[i];
        }
    }
    return sum;

}
console.log(addNumber(1, 2, 2, 3, 3, 99,4, 4, 5, 6, 7, 67, 6, 5, 4, 7, 8));