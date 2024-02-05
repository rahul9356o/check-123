// Problem 1
// Palindrome Checker Function

// Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false   


// Problem 2
// FizzBuzz Function

// Objective: Implement a function fizzBuzz(n) in JavaScript that prints the numbers from 1 to n. For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". Example: Input: fizzBuzz(5) Output: 1, 2, Fizz, 4, Buzz

// Problem 3
// Factorial Calculator

// Objective: Create a JavaScript function calculateFactorial(num) that returns the factorial of a given positive integer num. The factorial of a number is the product of all positive integers less than or equal to that number. Example: Input: calculateFactorial(5) Output: 120 (as 5! = 5 × 4 × 3 × 2 × 1 = 120)

//Problem1 Ansear:
function isPalindrome(str) {

    const length = arguments.length;

    for (i = 0; i < arguments.length / 2; i++) {

        if (String[i] !== String[length - 1 - i]) {
            return false;
        }
        return true;
    }

}

// const String = prompt('enter the string :');//js output he shyad...

const value = isPalindrome("rrdadrr");
console.log(value);