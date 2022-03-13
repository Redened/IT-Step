//! //////////////////////////////////////////////////////////////////// NOT FINISHED ////////////////////////////////////////////////////////////////////
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? W3SCHOOLS TUTORIALS
//? W3SCHOOLS REFERENCES
//? EXAMPLES
//? USAGES
//? FREECODECAMP
//? WEB DEV SIMPLIFIED





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? VARIABLES




//! VAR
//? can be reassigned, redeclared, does not have block { } rules.

/*
//! /////////////////////////////////////////////

var X = 2
console.log(X)      //? returns 2

var X = 4
console.log(X)      //? returns 4

//! /////////////////////////////////////////////

var X = 10
console.log(X)      //? returns 10

{
  var X = 2
  console.log(X)    //? returns 2
}

console.log(X)      //? returns 2

//! /////////////////////////////////////////////

{
  var X = 2  
}

console.log(X)      //? returns 2

//! /////////////////////////////////////////////
*/



//! LET 
//! CONST
//? can NOT be reassigned, redeclared, initialized before declaration and has block { } rules - variable declared in {} is isolated.

/*
//! /////////////////////////////////////////////

{
  const X = 2; 
  let X = 2;
}

console.log(X) //? returns error

//! /////////////////////////////////////////////

const X = 10;
let X = 10;
* Here X is 10

{
  const X = 10;
  let X = 10;
  * Here X is 2
}

* Here X is 10  


//! /////////////////////////////////////////////

? var X = 2;    // Allowed
! let X = 3;    // Not allowed

{
  ? let X = 2;    // Allowed
  ! let X = 3     // Not allowed
}

{
  ? let X = 2;    // Allowed
  ! var X = 3     // Not allowed
}

//! /////////////////////////////////////////////

? let.const X = 2;    // Allowed

{
  ? let.const X = 3;    // Allowed
}

{
  ? let.const X = 4;    // Allowed
}

//! /////////////////////////////////////////////

? var X = 2;      // Allowed
! const X = 2;    // Not allowed

{
? let X = 2;      // Allowed
! const X = 2;    // Not allowed
}

{
? const X = 2;    // Allowed
! const X = 2;    // Not allowed
}

//! /////////////////////////////////////////////

? const X = 2;    // Allowed
! X = 2;          // Not allowed
! var X = 2;      // Not allowed
! let X = 2;      // Not allowed
! const X = 2;    // Not allowed

{
?  const X = 2;   // Allowed
!  X = 2;         // Not allowed
!  var X = 2;     // Not allowed
!  let X = 2;     // Not allowed
!  const X = 2;   // Not allowed
}

//! /////////////////////////////////////////////
*/





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? NUMBERS 




var X = 10;
X.toString(); //* converts number to string

var X = 9.656;
X.toFixed(); //* rounds the number
X.toFixed(2); //* rounds the number and limits the decimals

var X = "10";
number(X); //* returns a number, converted from its argument.
parseInt(X); //* parses its argument and returns a floating point number, only returns the first number in the string
parseFloat(x); //* parses its argument and returns an integer, only returns the first number in the string





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? STRINGS 




var string = "abc \' \" \\ def";
//! using ' " \ within quotes

string.length; //* length of the string, number of characters

string.trim(); //* removes whitespace
string.toUpperCase() & string.toLowerCase(); //* transform string letters

string.str(startCoordinate, length); //* extract part of string.
string.replace(searchValue, replaceValue); //* replaces value with another value. stops at first value. returns a new string.

string.concat(string2); //* joins 2 strings together
string.split(splitOnCharacter, limitValue); //* converts string to array. sOC defines split coordinates. limitValue limits the number of elements in array.

string.charAt(stringCoordinate) & string[stringCoordinate]; //* string character at stringCoordinate

string.indeXOf(searchValue, searchStartCoordinate); //* coordinate of first searchValue
string.lastIndeXOf(searchValue, searchStartCoordinate); //* coordinate of last searchValue

string.search(searchValue); //* coordinate of first searchValue
string.match(searchValue); //* \searchValue\g return all searchValues as array object
string.includes(searchValue); //* returns true if searchValue is found
string.startsWith(searchValue, searchStartCoordinate); //* returns true if string begins with searchValue
string.endsWith(searchValue, searchEndCoordinate); //* returns true if string ends with searchValue

//! /Value/i case insensitive /Value/g global match, all values
//! '' \n new line, connects strings





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? ARRAYS 




const array = [arrayElement1, arrayElement2, arrayElement3]; //* array uses numbers to access elements

array[arrayIndex]; //* access array element
array[index] = newArrayElement; //* defining yet undefined elements of the array will add it to the array at the specified index.

array.length; //* returns the number of elements in the array
array[array.length - 1]; //* returns last element in the array

array.pop(); //* removes and returns the last element from the array
array.push(newArrayElement); //* adds element to the array at the end and returns the new array length
array.shift(); //* removes and returns the first element from the array, shifts the index of all subsequent elements down
array.unshift(); //* adds a new element to the array and returns the new array length, shifts the index of all elements up
array.delete(); //* removes the specified element from the array and makes its index undefined

array.toString(); //* converts array to string with array elements separated by commas
array.join(separatorCharacter); //* converts array to string with specified separator

array.concat(array2, array3, "newArrayElement", "newArrayElement"); //* concatenates arrays and creates a new array
array.splice(insertionIndex, removeElementNumber, "newArrayElement"); //* adds new elements to the array at insertionIndex, may remove elements with removeElementNumber, does not leave undefined indexes when used to remove elements with removeElementNumber
array.slice(startIndex, endIndex); //* slices out and creates a new array with specified array indexes, does not remove elements from the original array

array.sort(); //* sorts the array alphabetically, does not work with numbers
array.reverse(); //* reverses the elements in the array




array.filter(filterValue); //? function

array.map(mapValue); //? function

array.find(findValue); //? function

array.forEach(forEachValue); //? function





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? STORAGE 




//! data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

sessionStorage.setItem("name", "value"); //* save in storage
localStorage.setItem("name", "value"); //* save in storage

sessionStorage.getItem("name"); //* get from storage
localStorage.getItem("name"); //* get from storage

sessionStorage.removeItem("name"); //* remove from storage
localStorage.removeItem("name"); //* remove from storage





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//? PAGE COORDINATES 





//! pageX and pageY:
//? Relative to the top left of the fully rendered content area in the browser. This reference point is below the URL bar and back button in the upper left. This point could be anywhere in the browser window and can actually change location if there are embedded scrollable pages embedded within pages and the user moves a scrollbar.

//! screenX and screenY:
//? Relative to the top left of the physical screen/monitor, this reference point only moves if you increase or decrease the number of monitors or the monitor resolution.

//! clientX and clientY:
//? Relative to the upper left edge of the content area (the viewport) of the browser window. This point does not move even if the user moves a scrollbar from within the browser.


//! Element.getBoundingClientRect() method returns a 'DOMRect' object providing information about the size of an element and its position relative to the viewport.

//! scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////





//! The JavaScript for in statement loops through the properties of an Object:


for (key in object) {
  //! code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
  console.log(person[x]);
}




//! The JavaScript for of statement loops through the values of an iterable object.
//! It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more


for (variable of iterable) {
  //! code block to be executed
}

const car = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(x);
}

let language = "JavaScript";

for (let x of language) {
  console.log(x);
}


//! The while loop loops through a block of code as long as a specified condition is true.

while (condition) {
  //! code block to be executed
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}


//! A Map holds key-value pairs where the keys can be any datatype.
//! A Map remembers the original insertion order of the keys.


// new Map()	  Creates a new Map
// set()      	Sets the value for a key in a Map
// get()	      Gets the value for a key in a Map
// delete()     Removes a Map element specified by the key
// has()      	Returns true if a key exists in a Map
// forEach()  	Calls a function for each key/value pair in a Map
// entries()  	Returns an iterator with the [key, value] pairs in a Map
// size	        Returns the number of elements in a Map

// Create a Map
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");    // Returns 500

fruits.size; // Returns 3 

fruits.delete("apples"); // Removes apples from the map

fruits.has("apples"); // Returns true



//!                 Object	                                    Map
// Iterable        	Not directly iterable	                      Directly iterable
// Size            	Do not have a size property	                Have a size property
// Key Types      	Keys must be Strings (or Symbols)	          Keys can be any datatype
// Key Order      	Keys are not well ordered	                  Keys are ordered by insertion
// Defaults	        Have default keys	                          Do not have default keys

