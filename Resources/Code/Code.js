//! //////////////////////////////////////////////////////////////////// NOT FINISHED ////////////////////////////////////////////////////////////////////
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? W3SCHOOLS TUTORIALS
//? W3SCHOOLS REFERENCES
//? EXAMPLES 
//? USAGES 

//! VAR
//? can be reassigned, redeclared, does not have block { } rules.

//! LET CONST
//? can NOT be reassigned, redeclared, initialized before declaration and has block { } rules - variable declared in {} is isolated.



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


var string = "abc ' \" \\ def";
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

//! /Value/i case insensitive /Value/g all values //gi both
//! '' \n new line, connects strings
//! `` template literal. allows quotes inside strings, multi-line strings. ${} for variables and expressions


//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////


const array = [arrayElement1, arrayElement2, arrayElement3]; //* array uses numbers to access elements
//! array indexing starts with 0... 0 is the first element, 1 is the second element.
//* numbers, strigns, variables, objects and functions can be used in one array.

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

array.sort(function (a, b) { return a - b }); //* sorts the numbers in the array in ascending order, if b - a is used the order will be reversed


//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////////////////
