//  type of function 

// 1.named function Expresion///////////////////////////////////////

const isEvenOdd = function process(num) {

    return num % 2 == 0;
    
}

const result = isEvenOdd(50);

// console.log(result);

// anonymous function Expresion/////////////////////////////////////////////


const isEvenOdd2 = function (num) {

    return num % 2 == 0;
    
}

const result2 = isEvenOdd(50);

//Why named Function Expretion is IMP
// =>
//1. Debuggging  2.Readablity  3. recorsion

// ex.

function isEvenOdd(num, fn) {


    fn();

    return num % 2 == 0;
    
}

isEvenOdd(10, function process() {

    console.log("Processing");

    console.trace("Trace Of the function");// used precedence of function exequsting
    

});