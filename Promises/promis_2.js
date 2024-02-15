
const getPromises = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("I am a promise 1");
            resolve("success");

        }, 4000);

    });
};


const getPromises2= () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("I am a promise 2");
            resolve("success");

        }, 4000);

    });
};

const getPromises3= () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("I am a promise 3");
            resolve("success");

        }, 4000);

    });
};

// let promis = getPromises();

console.log("Fetching Data 1........");
getPromises().then((res) => {
    console.log("Fetching Data 2........");
    getPromises2().then( () => {
        // console.log(res);
        console.log("Fetching Data 3........");
        getPromises3().then( () => {
            console.log("success");
        })
});
});