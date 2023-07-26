// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseStr(inputString) {

    let newString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
      newString += inputString[i];
    }

    return newString;

  }
  

  const inputString = "hello world";
  const output = reverseStr(inputString);
  console.log(output)


  // Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
  
  function sumOfNumbers(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }

    return sum;
    
  }
  
  
  const array1 = [2, -5, 10, -3, 7];
  const result = sumOfNumbers(array1);
  console.log(result)


  // Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

  function mostFrequentElement(arr) {

    const frequenceElement = {};

    let maxFrequency = 0;
    let mostFrequentElement = null;
  
    for (const num of arr) {

      frequenceElement[num] = (frequenceElement[num] || 0) + 1;

      if (frequenceElement[num] > maxFrequency) {
        maxFrequency = frequenceElement[num];
        mostFrequentElement = num;
      }

    }
  
    return mostFrequentElement;

  }
  

  const array2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result1 = mostFrequentElement(array2);
  console.log(result1)


  
//Task-4 Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbers(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let left = 0, right = arr.length - 1; left < right; ) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];

}


const array3 = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result2 = findTwoNumbers(array3, targetValue);
console.log(result2)




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero is not allowed!";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}


const number1 = 10;
const operator = '+';
const number2 = 5;

const result4 = calculator(number1, operator, number2);
console.log(result4)


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/";

  const allChars = uppercaseChars + lowercaseChars + numbers + specialChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}


const length = 8;
const password = generateRandomPassword(length);
console.log(password);


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: Array must have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: all elements in the array are the same.";
  }

  return secondSmallest;
}


const arr1 = [5, 2, 7, 1, 3];
const arr2 = [10, 10, 10, 10];

const result5 = findSecondSmallest(arr1);
const result6 = findSecondSmallest(arr2);

console.log(result5)
console.log(result6)






  



  


