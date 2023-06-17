// ## Q + A
// 1. How do we assign a value to a variable?
// Ans: The Assignment (=) operator.
//x=5;

// 2. How do we change the value of a variable?
// var e = 15;

// function change_value(e){

//     e = 10;
// }

// 3. How do we assign an existing variable to a new variable?
var i= {
   fname: "Jon",
   lname: "Smith",
   age: 50
 }
 
 var j = i;
 console.log(j);
// 4. Remind me, what are declare, assign, and define?
let message = 'Hello!'; // define and assign

alert(message);
// declare
// let user = "john", age = 25. msg = 'Hello';
// console.log(user);
// B.STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";


// console.log(firstVariable); //1

// const yourName = "Thahira";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//c.BOOLEANS

 const a = 4; 
 const b = 53; 
const c = 57; 
 const d = 16; 
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
 console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
 console.log(true || false); 
console.log(false && false && false && false && false || true); 
 console.log(false === false) 
 console.log(e == 'Kevin'); 
 console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
 console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));
//Driver's Ed

let age = 25;
if (age>= 16){
   console.log("Here are the Keys!");
}else{
   console.log("sorry,you are too young")
}

// II Loops
let t;
 for (t=0;t<100;t++){

 }

//A. The Basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

for (var input = 1; input <= 10; input++) {
   console.log(input);
  }
 
  // Write a loop that will print out all the numbers from 10 up to and including 400


 for (var myn =10; myn <=400; myn++ ){
   console.log(myn);
  }

 // Write a loop that will print out every third number starting with 12 and going no higher than 4000
 
 for (let i = 12; i <= 4000; i += 3) {
   console.log(i);
 }
 
//Get Even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (var even = 1;even <=100; even++){
   if (even % 2 === 0){
      console.log(even + " <--- is an even number");
   }else{
   console.log(even);
}
}

//Give Me 5
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

for (var fiv = 1; fiv <= 100; fiv++){
   if (fiv %5 ===0){
      console.log(fiv +" I found a " + fiv +" " + "number.HighFIve!");
   } else{
      console.log(fiv);
   }
   if (fiv %3 ===0){
      console.log(fiv +" I founf a " +fiv+" " + "Three is crowd");
   }
}

//Savings Account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.
 //You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

//
//Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0;
for (let i =1; i <= 10;i++){
   bank_account +=i;
}
  console.log ("$" + bank_account);

  bank_account =0;
  for ( i = 1; i<= 100; i++){
   bank_account += i*2;
  }
  console.log("$" + bank_account);

//ARRAYS & CONTROL FLOW
//What are the things in an array called?
//ans: Value
//Do Arrays guarantee those things will be in order?
//ans: no
//What real-life thing could you model with an array?
// Ans: [grocery list, counting numbers,]

// Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes

 var quates =["today is all you have","things wil work out","search for soul"];
console.log (quates);

//C.Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings =[1,10,"hello","true"];
let rt = randomThings[0];
console.log(rt);
randomThings[2] = "world";
console.log(randomThings);


//d.Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

   const ourClass =["Salty","zoom","Sardine", "Slack", "Github"];
   let myClass = ourClass[2];
   console.log(myClass);
   ourClass[4] = "Octocat";
   ourClass.push("Cloudy City");
   console.log(ourClass);
 
//E. Mix it up

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
const myArray = [5,10,500,20];
myArray.push("Aegon","Degon");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
let ourArray = myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);

// Ans: we can mutate the array.
//mutate means the act of changing the value



//Biggie Smalls
 

   // Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
 let number = 104;
 if (number < 100){
   console.log ("little number");
 }else  if (number>100){
   console.log("big number");
 }else{

 }


 // Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let n = 7;
 if (n < 5){
   console.log ("little number");
 }else  if (n>10){
   console.log("big number");
 }else{
console.log("monkey");
 }
// what's in your closet?

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];
 
 // Thom's closet is more complicated. Check out this nested data structure!!
 const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];
 //  What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
 // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas

 console.log("kristyn is rocking that " + kristynsCloset[2] + "today");

 kristynsCloset.push("raybans");

 const thomShirt = thomsCloset[0][0];
 const thomPants = thomsCloset[1][1];
 const thomAccessory =thomsCloset[2][2];

 console.log("Thom is looking fierce in a " + thomShirt + "," + thomPants + ", and " + thomAccessory );

 thomsCloset[1][2] = "Footie Pajamas";
  

 //Functions
 //a.PrintGReeting
 //B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

 function printCool(name) {
   console.log(name + "is cool.");
 }
 printCool("Captain Reynolds");

 //calculateCube
 //Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
 function calculateCube(number){
   var volume = number **3;
   console.log("The volume of a cube " + number + volume  );
 }
 calculateCube(5);

 //D. isVowel
 //Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

 function isVowel(character) {
   var lowerCaseChar = character.toLowerCase();
   return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
 }
 console.log(isVowel('a'));
 console.log(isVowel('b'));

 //E. getTwoLengths
 //Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.


function getTwoLength(string1, string2){
  var length = [];
  length.push(string1.length);
  length.push(string2.length);
  return length;
}

console.log(getTwoLength("Hank","Hippopotamous"));

// F.getMultipleLengths
// 
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(strings){
  var length = [];
  for(var i=0; i < strings.length; i++){
    length.push(strings[i].length);

  }
  return length;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//max of three
//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

function maxOfThree(s1,s2,s3){
  if (s1>=s2 && s1<=s3){
    return s1;
  }else if (s1>=s1 && s2 >= s3){
    return s2;
  }else{
    return s3;
  }
}

console.log(maxOfThree(6, 9, 1));

//printLongestWord

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(words) {
  let longestWord = '';
  
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  
  return longestWord;
}


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//OBJECTS
//A.Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
  name: 'Thahira',
  email: 'j234@example.com',
  age: 25,
  purchased: []
};
// Updating the email address
const updatedUserWithEmail = {
  ...user,
  email: 'newemail@example.com'
};

// Incrementing the age
const updatedUserWithAge = {
  ...user,
  age: user.age++
};

// Adding a new key 'location'
const updatedUserWithLocation = {
  ...user,
  location: 'Some location'
};
console.log(user);

//D.Shopaholic

//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

let purchaseArray = [];
purchaseArray.push("carbohydrates");
purchaseArray.push("peace of Mind");
purchaseArray.push("merino jodhpures");
console.log(purchaseArray.find(item => item=== "merino jodhpures"));


//E.Object within object

// If we want to give our user a friendwith a nameand age, we could write:


// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

 



user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "New York",
  purchasedArray: []
};


console.log(user.friend.name);
console.log (user.friend.location);

 user.friend.age =55;
 user.friend.purchasedArray.push("The One Ring");
 console.log(user.friend);

 user.friend.purchasedArray.push("A Latte");
 console.log(user.friend);



//console.log(user.friend.purchaseArray.find(item => item === "A Latte"));

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's pur//F.Loopschasedarray, and prints each element to the console.


// console.log("User's purchasedArray:");
// for (let i = 0; i < user.purchasedArray.length; i++) {
//   console.log(user.purchasedArray[i]);
//  }

console.log("Friend's purchasedArray:");
for (let i = 0; i < user.friend.purchasedArray.length; i++) {
  console.log(user.friend.purchasedArray[i]);
}

//G. Functio  can operate on objects


// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.


let person ={
  name:" Inshirah",
  age: 35,
};

function updatePerson(){
  person.age += 1;
  person.name = person.name.toUpperCase();



}
  function oldAndLoud(user){
user.age +=1;
user.name = user.name.toUpperCase();

  }
  updatePerson();
  console.log(person);

  oldAndLoud(person);
  console.log(person);










