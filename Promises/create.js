

// let promise = new Promise((resolve, reject) => {

//     console.log("Hello");
//     resolve("success")
//     reject("Technical err ocurred")
// });





function getData(dataId) {

    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            console.log("data", dataId);
            // resolve("Success");
            rejecte("Error");
        }, 4000);

    });

}

let result = getData(6557);
console.log(result);