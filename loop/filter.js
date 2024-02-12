

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)

// console.log(newNums);




const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNums.filter((num) => {
    return num > 4

})

// console.log(newNums);


// same with halpe of forEach

const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = []

myNums3.forEach((num) => {

    if (num > 4) {
        newNum.push(num);
    }

})

console.log(newNum);

