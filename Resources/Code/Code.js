

var;
//* can be reassigned, redeclared, does not have block { } rules.

let;
//* can NOT be reassigned, redeclared, initialized before declaration and has block { } rules: var declared in { } is isolated.

const;
//* same as LET. must be declared immediately. elements of arrays and objects can be changed. 



/*

//! /////////////////////////////////////////////

{
  const.let X = 2;
  ! X can NOT be used outside
}

{
  var X = 2;
  ? X can be used outside
}

//! /////////////////////////////////////////////

var X = 10;
* Here X is 10

{
  var X = 2;
  * Here X is 2
}

* Here X is 2

//! /////////////////////////////////////////////

const.let X = 10;
* Here X is 10

{
  const.let X = 2;
  * Here X is 2
}

* Here X is 10  

//! /////////////////////////////////////////////

var X = 2;
* Now X is 2

var X = 3;
* Now X is 3

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





'==' //* equal to
'===' //* equal value and equal type
'!=' //* not equal
'!==' //* not equal value or not equal type

'%' //* subtraction remainder operator

'+=' //* PLUS and EQUALS. ADDS and SUMS numbers. CONCATENATES strings



var X = 10;
X.toString(); //* converts number to string
X.toString(2) // converts number to string with binary representation
X.toString(8) // converts number to string with octal representation
X.toString(10) // converts number to string with decimal representation
X.toString(16) // converts number to string with hexadecimal representation


var X = 9.656; 
X.toFixed(); //* rounds the number
X.toFixed(2); //* rounds the number and limits the decimals
X.toFixed(10); //* if the parameter exceeds the number decimals it will add zeroes


var X = '10';
number(X); //* returns a number, converted from its argument.
parseInt(X); //* parses its argument and returns a floating point number, only returns the first number in the string
parseFloat(x); //* parses its argument and returns an integer, only returns the first number in the string


var X = Number.MAX_VALUE; //*	returns the largest number possible in JavaScript
var X = Number.MIN_VALUE; //*	returns the smallest number possible in JavaScript
var X = Number.POSITIVE_INFINITY; //*	represents infinity (returns when number exceeds max decimals)
var X = Number.NEGATIVE_INFINITY; //*	represents negative infinity (returns when number exceeds max decimals)
 




//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////





var stringName = 'abcdefghijkl \'w \"i \\ th \\ i\" n\' mnopqrstuvwz'; 
//!     _ \' _   _ \" _   _ \\ _   for these symbols     ' " \     to be used within '' quotes   
 
stringName.length //* length of the string, number of characters
stringName.trim() //* removes whitespace

stringName.str(startCoordinate, length) //* extract part of string.
stringName.slice(startCoordinate, endCoordinate) //* extract part of string. negative values reverse the coordinate
stringName.substring(startCoordinate, endCoordinate) //* does NOT accept negative values

stringName.replace(searchValue, replaceValue) //* replaces value with another value. stops at first value. returns a new string. 

stringName.toUpperCase() & stringName.toLowerCase() //* transform string letters

stringName.concat(StringName2) //* joins 2 strings together

stringName.split(splitOnCharacter, limitValue) //* converts string to array. sOC defines split coordinates. limitValue limits the number of elements in array.

stringName.charAt(stringCoordinate) & stringName[stringCoordinate] //* string character at stringCoordinate
stringName.indeXOf(searchValue, searchStartCoordinate) //* coordinate of first searchValue
stringName.lastIndeXOf(searchValue, searchStartCoordinate) //* coordinate of last searchValue

stringName.search(searchValue) //* coordinate of first searchValue
stringName.match(searchValue) //* \searchValue\g return all searchValues as array object
stringName.includes(searchValue) //* returns true if searchValue is found

stringName.startsWith(searchValue, searchStartCoordinate) //* returns true if string begins with searchValue
stringName.endsWith(searchValue, searchEndCoordinate) //* returns true if string ends with searchValue

//! /Value/i case insensitive /Value/g all values //gi both

var stringName = '<div class="card" style="width: 18rem;">\n<img class="card-img-top" src="card.jpeg" alt="Card">\n<div class="card-body">\n  <h5 class="card-title">Price: ' + sPrice + '</h5>\n  <p class="card-teXt">Weight: ' + sWeight + '<br>In stock: ' + storage + '</p>\n  <a href="#" class="btn btn-primary">Buy</a>\n</div>\n</div>';
//! \n new line, + connects strings

var stringName = `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="card.jpeg" alt="Card">
<div class="card-body">
  <h5 class="card-title">Price: ${sPrice}</h5>
  <p class="card-teXt">Weight: ${sWeight}<br>In stock: ${storage}</p>
  <a href="#" class="btn btn-primary">Buy</a>
</div>
</div>`;
//! `` template literal. instead of ''. allows quotes inside strings, multi-line strings. ${} for variables and expressions





//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////





const arrayName = [arrayElement1, arrayElement2, arrayElement3,] //* array uses numbers to access elements
//! array indexing starts with 0... 0 is the first element, 1 is the second element.
//* numbers, strigns, variables, objects and functions can be used in one array.

arrayName[arrayIndex]; //* access array element
arrayName[0]; // arrayElement1
arrayName[1]; // arrayElement2
document.getElementById().innerHTML = arrayName //* to access entire array use the arrayName


arrayName.length; //* returns the number of elements in the array
arrayName[arrayName.length - 1]; //* returns 'yellow'. we can use the array length to access the last element in the array. length - 1 = index of the last element. 

arrayName.pop(); //* removes and returns the last element from the array
arrayName.push(newArrayElement) //* adds element to the array at the end and returns the new array length

arrayName[index] = newArrayElement; //* defining yet undefined elements of the array will add it to the array at the specified index. 

arrayName.toString(); //* converts array to string with array elements separated by commas
arrayName.join(separatorCharacter) //* converts array to string with specified separator

arrayName.shift(); //* removes and returns the first element from the array, shifts the index of all subsequent elements down
arrayName.unshift(); //* adds a new element to the array and returns the new array length, shifts the index of all elements up

arrayName.delete(); //* removes the specified element from the array and makes its index underfined

arrayName.concat(arrayName2, arrayName3, 'newArrayElement', 'newArrayElement'); //* concatenates arrays and creates a new array, strings are also allowed

arrayName.splice(insertionIndex, removeElementNumber, 'newArrayElement'); //* adds new elements to the array at insertionIndex, may remove elements with removeElementNumber, does not leave undefined indexes when used to remove elements with removeElementNumber

arrayName.slice(startIndex, endIndex); //* slices out and creates a new array with specified array indexes, does not remove elements from the original array

arrayName.sort(); //* sorts the array alphabetically, does not work with numbers

arrayName.reverse(); //* reverses the elements in the array

arrayName.sort(function(a, b) {return a - b;}); //* sorts the numbers in the array in ascending order, if b - a is used the order will be reversed
arrayName[0] //* lowest value in the array
arrayName.length - 1 //* highest value in the array

arrayName.sort(function(a, b) {return 0.5 - Math.random()}); //* sorts the array elements in random order





for (let constant = arrayName.length - 1; constant > 0; constant--) {
  let anotherConstant = Math.floor(Math.random() * constant)
  let arrayElement = arrayName[constant]
  arrayName[constant] = arrayName[arrayElement]
  arrayName[anotherConstant] = arrayElement
} //* correct way to sort numbers in the array (fisher yates method)


function myArrayMax(constant) {
  return Math.max.apply(null, constant);
}//* highest value in the array


function myArrayMin(constant) {
  return Math.min.apply(null, constant);
}//* lowest value in the array






//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////





switch(expression) {
  case x:
    // code block
    break;

  case y:
    // code block
    break;

  default:
    // code block
}


for (key in object) {
  // code block to be executed
}

for (variable of iterable) {
  // code block to be executed
}


for (statement1; statement2; statement3) {
  /* 
  ? Statement 1 is executed (one time) before the execution of the code block.

  ? Statement 2 defines the condition for executing the code block.

  ? Statement 3 is executed (every time) after the code block has been executed.
  */
}



const arrayName = ['arrayElement1', 'arrayElement2', 'arrayElement3', 'arrayElement4', 'arrayElement5'];

let finalResult = '';

for (let constant = 0; constant < arrayName.length; constant++) { 
  finalResult += `The is the "constant" in the for loop, representing index of array, which right now is *${constant}*. The array element in index "${constant}" is "${arrayName[constant]}" \n`;
}


arrayName.forEach(functionName);

function functionName(constant) {
  finalResult += `${constant} \n`;
}












