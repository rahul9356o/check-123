
// console.log("one");
// console.log("two");

// setTimeout(() => {

//     console.log("Hello");


// }, 8000);

// console.log("three");

// console.log("four");
// console.log("rahul vijay nalawade");


function getData(dataId, getNextData) {

    setTimeout(() => {

        console.log("data", dataId);

        getNextData();


    }, 2000);


}


//callback hell 

getData(4, () => {
    console.log("getting data two");
    getData(5, () => {
        console.log("Geting data three");
        getData(6, () => {
            console.log("Geting Data fourth");
            getData(9, () => {
                console.log("Geting Data Fourth");

            });

        });
    });
});


