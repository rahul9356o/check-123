// Sanket sir github link https://leetcode.com/studyplan/30-days-of-javascript/
// https://jsbubbl.es/bubbles#ZnVuY3Rpb24gYWRkT2RkcyguLi5udW1iZXJzKSB7CiAgdmFyIHRvdGFsID0gMDsKICBmb3IgKGxldCBudW1iZXIgb2YgbnVtYmVycykgewogICAgaWYgKG51bWJlciAlIDIgIT09IDApIHsKICAgICAgdG90YWwgKz0gbnVtYmVyOwogICAgfQogIH0KICByZXR1cm4gdG90YWw7Cn0KCmZ1bmN0aW9uKiBtYWtlTGlzdChuKSB7CiAgbGV0IGkgPSAwOwogIHdoaWxlIChpIDwgbikgewogICAgeWllbGQgaSsrOwogIH0KfQoKY29uc3Qgc2Vjb25kc0luSG91ciA9IGFkZE9kZHMoLi4ubWFrZUxpc3QoMTIwKSk7Cg==
//advace js : https://github.com/getify/You-Dont-Know-JS



//Printig Function
// console.log("Rahul Vijay Nalawade1")
// console.error("Rahul Vijay Nalawade2")
// console.warn("Rahul Vijay Nalawade3")


// primitive ("Stack Memory") 
//variables and Constant 

// Vriable - let
// Constant- const 

let userEmail = "rahulvijaynalawade@1gmail.com"
const password = "1234357"

//Data Type :

/*Srings
number
boolean
null
Undefined
Symbol
BigInt ....
*/
// Examples

const firstName = "rahul"
const age = 25
const score = 200
let isLoginId = true
const buttenId = Symbol("id")
const nonVarsion = null
let bankBalance = undefined
const aReallyLongNumber = 9000000000000000n

//Refrence (Non Primitive Number) - Objects(HEAP Memory):

/*
Array
Object
Function
*/

// Array 
const number = [1, 2, 3, 4, 5, 6]

const heroes = [
    "5uperman",
    "flash",
    "batman"

]
//Object

const userObject = {

    name: "rahul vijay nalawade",
    age: 45,
    isLogInt: true
}


//Function

const sayhello = function () {
    // console.log("Rahul Vijay Nalawade")

}




//=====================================Stack and Heap========================================================== 

// Stack Memory -> (primitive),
// Heap Memory  -> (Non-primitive). 

let myYoutubName = "rahulWithCode"

let anotherName = myYoutubName

anotherName = "rahulvijaynalawade"

// console.log(myYoutubName)

// console.log(anotherName)

let User = {
    username: "rahul",
    age: 45
}

let anotherUser = User

anotherUser.username = "VijayNalawade"

// console.log(User.username)
// console.log(anotherUser.username)

// Other Things Explain In Imege 


// +++++++++++++++++++++++++++++++++++++ Opraturs +++++++++++++++++++++++=============
// 1.Arithmetic opertur 
//3+4
//5-2
//3*3
//2**2 => 2*2*2
//10%2

const numberOne = "Rahul"

const numberTwo = "  Vijay"

const numberThree = "  Nalawade"

const numberFour = numberOne + numberTwo + numberThree

// console.log( numberFour )

//2. Comparision operatur

let pw = 6
let pwSkill = 5

// console.log(pw==pwSkill)
// console.log(pw>=pwSkill)
// console.log(pw<=pwSkill)
// console.log(pw!=pwSkill)

//3.Assignment Opertur

// let pww = 4

// valueTwo += 10 => valuTwo = valuTwo + 10 ;   
// -=
// %=
// /=

// +++++++++++++++++++++ conversion +++++++++++++++++++++++++++++++++++++++++++++============================
// String to int 
let bankbalance = '100'

let bankbalanceInt = parseInt(bankbalance)

// console.log(typeof bankbalance)

// console.log(typeof bankbalanceInt)



let bankbalance2 = 'abc'

let bankbalanceInt2 = Number(bankbalance2)

// console.log(typeof bankbalance2)

// console.log(typeof bankbalanceInt2)



//difference Btween NULL, undefined:

// console.log(5 + null)
// console.log(5 + undefined)

const firstName1 = "Hello"
const lastName = "World"

// console.log(firstName1+" "+lastName)
// console.log('My First Name is ${firstName1} and Last Name is ${lastName}')
// console.log('My First Name is ${firstName} And Last Name is ${lastName}')


// String +++++++++++

const username = new String("rahul@1234")
const button = new String ("rahul vijay nalawade");


// console.log(button);

// console.log(username)

// console.log(username[2])
// console.log(button[4]);

// console.log(username.length)
// console.log(username.charAt(2))
// console.log(username.substring(0,6))
// console.log(button.substring(5,8));
// console.log(username.replace('rahul',"vijay"))
// console.log(button.replace('rahul', 'Abhishek'));
// console.log(username.includes("rahul"))
// console.log(button.includes("nalawade"));
// console.log(username.includes(nalawade)) => Error ,This Worde dosn't have in String
// console.log(username.toUpperCase())
// console.log(button.toUpperCase());



//Number:===========================================

const num = new Number(4.4586138)
// console.log(num.toFixed(2))

const subscribers = 100000
// console.log(subscribers.toLocaleString())

// console.log(Number.MAX_VALUE)

// console.log(Math.floor(Math.random()*10))



//Array----------===========}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

const myarray = [2, 4, 6, 8, 10]//   Array including String Array apple all rull

const myArray = new Array(2, 4, 6, 8, 10)
// console.log(myArray[3])
// console.log(myArray.length)


myArray.push(12)
// console.log(myArray)
myArray.unshift(7)
// console.log(myArray)

// const lastName=myArray.pop()    => some both of them pop function.
myArray.pop()
// console.log(myArray)
// console.log(myArray.pop())

console.log(myArray.toString())
console.log(myArray.join("-"))
// console.log(myArray.slice(1, 3))//I am not understand


// =====================================Objects===========================================================================================================

const user = {
    username: "hc",
    "first Name": "hitesh",
    name: "hitesh",
    email: "h@hc.com",
    age: 20,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["lemon", "peach", "ginger"],
    address: 
    {
        city: "Jaipur",
        state: "Rajasthan"
    }
}

const anotherUser2 = user;

// console.log(user.age);
// console.log(user['age']);
// console.log(user.tea[1]);
// console.log(user.address.state);
// console.log(user["address"]["state"]);

user.email = "hitesh@pw.live"
console.log(user);
console.log(anotherUser2);

delete user.isAdmin
const userListFromDatabase = [{}, {}, {}]// no

console.log(user.hasOwnProperty('tea'));//no
// console.log(Object.entries(user));//no
