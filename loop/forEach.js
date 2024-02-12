

const coding = [ "js", "ruby", "java", "phython", "cpp"]

coding.forEach( function (val) //call back value => loop ke andarka function
 {

    // console.log(val);
    
})

coding.forEach( (item) =>{

    // console.log(item);


})


function printMe(item) {

    // console.log(item);

}


coding.forEach(printMe);


coding.forEach(( item, index, arr) => {

    console.log(item, index, arr);

})


const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },


    {
        languageName: "jva",
        fileName: "java"
    },


    {
        languageName: "phython",
        fileName: "py"
    },


    {
        languageName: "c++",
        fileName: "cpp"
    }
]



myCoding.forEach( (item, index, arr) => {


    console.log(item, index, arr);

})

// this loop does not return an vslue 