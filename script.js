//Code Bug Fixing Problem

//BMI-Calaculator Example 1//
function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
 var output = calculateBMI(45, 1.65)
 console.log(output)

//Example-2 Tempreture Calculator //
function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9/5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
let output2 = convertTemperature(-40, "F")
console.log(output2)

//Example 3 Tip Calculator //
function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

let output3 = calculateTip(90.00, 0.10)
console.log(output3)

//Example 4 Palindrome Checker //
function ispalindrome(str){
    let lower = str.toLowerCase()
    const cleanedStr = lower.replace(/[^a-zA-Z0-9]+/)
    const reversedStr = cleanedStr.split("").reverse().join("")
    if(cleanedStr === reversedStr){
        return true;
    } else{
        return false;
    }
}

var output4 = ispalindrome("1221")
console.log(output4);

//Example 5 
function vowelsCount (str){
    let arr = ["a","e","i","o","u"];
    let lowerstr = str.toLowerCase()
    let ayr = 0;
    for (let i=0; i<lowerstr.length; i++){
        if(arr.includes(lowerstr[i])){
            ayr++;
        }
    }
    return ayr;
}

let count = vowelsCount("Shivam")
console.log(count)


//Improvised Perspective to the Coding Problem

//Example 1 Find Longest word Length 
function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
let maxLength = 0;

for (let word of words) {
    const length = word.length;
    if (length > maxLength) {
        maxLength = length;
    }
}

return maxLength;
}
// Do not modify the below lines
module.exports = { findLongestWord };

//Example 2 Title Case
function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');
const title = words.map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(' ')
return title
}
console.log(titleCase("Be yourself; everyone else is already taken."))
// Do not modify the below lines
module.exports = { titleCase };

//Example 3 Count Occurrences of a Character
function countOccurances(str, char){
    let count = 0;
    for(let i=0; i<str.length ; i++){
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countOccurances("Elephant", "E"))

//Example 4 Shopping Cart Total
const cart = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];
function calculateTotal(cart) {
    // Write your code here
    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    return total;
}
console.log(calculateTotal(cart))
// Do not modify the below lines
module.exports = { calculateTotal };

//Example 5 FizzBuzz
function fizzBuzz(n){
    let result;
    for(let i = 1; i<=n; i++){
    switch (true) {
        case i%3==0:
            result += "Fizz"
            break;
        case i%4==0:
            result += "Buzz"
            break;
        case i%4==0 && i%3==0:
            result += "FizzBuzz"
            break;
        default:
            result += i + " "
            break;
    }
}
return result
}
console.log(fizzBuzz(12))

//Logic Building Coding Questions
//findPrime number 1
function findPrimes(input) {
    let result = [];
    for (let i = 2; i < input; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {  
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(i);
        }
    }
    return result;
}


console.log(findPrimes(20)); 

//character reversel 2

function characterReversel(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(characterReversel("javaScript"))

//Sign Of Product 3
function findProduct(arr){
    let result = 1;
    for(let i=0; i<arr.length; i++){
        result *=arr[i]
        if (result < 0){
            result = -1
        }else if(result > 0){
            result = 1
        }else{
            result = 0
        }
    }
    return result
}
console.log(findProduct([2, 0, 5, 4]))

//Check Sign 4
function checkSign(num1, num2, num3) {
    let positiveCount = 0;
    let negativeCount = 0;
  
    if (num1 > 0) positiveCount++;
    if (num2 > 0) positiveCount++;
    if (num3 > 0) positiveCount++;
  
    negativeCount = 3 - positiveCount;
  
    if (positiveCount === 3) return "+++";
    if (positiveCount === 2) return "++-";
    if (positiveCount === 1) return "+--";
    if (positiveCount === 0) return "---";
  }
  console.log(checkSign( 2, 5, 7))
  
  //Url Slug Generator 5
  function generateSlugWithCom(text) {
    let slug = text.toLowerCase();
    slug = slug.replace(/\s+/g, '-');
    slug = slug.replace(/[^a-zA-Z0-9\-]/g, '');
    slug = slug.replace(/[-]+/g, '-');
    slug = slug.replace(/^-+|-+$/g, '');
    slug += '.com';
    return slug;
}
const text = "URL Slug Generator Code!";
const slugWithCom = generateSlugWithCom(text);
console.log(slugWithCom); 

//Shortest Word Distance 6
  function shortestDistance(wordsDict, word1, word2) {
    let minDistance = Infinity;
    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;
        } else if (wordsDict[i] === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }

    return minDistance;
}

const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
const word1 = "coding";
const word2 = "practice";
console.log(shortestDistance(wordsDict, word1, word2));

//7 FLIP game
function findMove(str) {
    const states = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === '+' && str[i + 1] === '+') {
            const newState = str.substring(0, i) + '--' + str.substring(i + 2);
            states.push(newState);
        }
    }
    return states;
}

const inputString = "++++";
const possibleStates = findMove(inputString);
console.log(possibleStates); 

//8 Swap Consecutive Character
function swapChar(str) {
    let result = '';
    for (let i = 0; i < str.length - 1; i += 2) {
        result += str[i + 1] + str[i];
    }
    if (str.length % 2 !== 0) {
        result += str[str.length - 1];
    }
    return result;
}

//9 Array Intersection
console.log(swapChar("Almabetter"))
function arrayIntersection(arr1,arr2){
    let arr11 = new Set(arr1)
    let arrset = [...arr11]
    let arr12 = new Set(arr2)
    let arrset1 = [...arr12]
    let include = arrset.filter((element => arrset1.includes(element)))
    let sort = include.sort((a,b)=>a-b)
    return sort
}
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]))

//10 insert 7 in character
function insert7(str) {
    let result = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
            result += str[i];
            if (count === 6) {
                result += '7';
                count = 0;
            }
        }
    }

    return result;
}
console.log(insert7("Hello World and Universe!"))