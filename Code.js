//? თუ რაიმე კითხვა გექნებათ ან რომელიმე საკითხი გაუგებრად წერია, მომწერეთ თიმში.
//! პირიქით გამიხარდება ;D


//* Extension: 'Better Comments'. for better readability


////////////////////////////////


document.write()
// testing purpose. deletes entire HTML when called upon.
/*
*    .write('<h1>work in progress</h1>');
*    .write('work in progress'); 
*    .function 
*    .variable 
*/

console.log()
// debugging purpose. similar to document.write() in usage.

window.alert()





////////////////////////////////





var;
//* can be reassigned, redeclared, does not have block { } rules.

let;
//* can NOT be reassigned, redeclared, initialized before declaration and has block { } rules: var declared in { } is isolated.

const;
//* same as LET. must be declared immediately. elements of arrays and objects can be changed. 


/*

{
  let X = 2;
}
! X can NOT be used outside

{
  var X = 2;
}
? X CAN be used outside

//

var X = 10;
* Here X is 10

{
var X = 2;
* Here X is 2
}

//

let X = 10;
* Here X is 10

{
let X = 2;
* Here X is 2
}

//

var X = 2;
* Now X is 2

var X = 3;
* Now X is 3

//

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

//

? let X = 2;    // Allowed

{
? let X = 3;    // Allowed
}

{
? let X = 4;    // Allowed
}

//

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

//

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

//

? const X = 2; // Allowed

{
? const X = 3; // Allowed
}

{
? const X = 4; // Allowed
}

*/





////////////////////////////////





var X = 5; //* number

var X = '', X = '5', X = 'red' //* string

var X = [5, red] //* array

var X = {number: 5, color: 'red'}; //* object





////////////////////////////////





var X = 10;
X += 5;
//* X = 15

var teXt1 = "What a very ";
teXt1 += "nice day";
//* 'What a very nice day'

var X = 5 + 5; //* 10
var y = "5" + 5; //* 55
var z = "Hello" + 5; //* hello5

'==' //* equal to
'===' //* equal value and equal type
'!=' //* not equal
'!==' //* not equal value or not equal type

'%' //* subtraction remainder operator. 


var X = 0.2 + 0.1; //! NOT always accurate
var X = (0.2 * 10 + 0.1 * 10) / 10; //? accurate

var X = "100";
var Y = "10";
var Z = X + Y; //! does NOT work

var X = "100";
var Y = "10";
var Z = X * Y, Z=X/Y, Z=X-Y; //? does work. result will be a number

var X = infinity //* calculation returns infinity if result is outside 17 decimals, is divided by zero 





///////////////////////////////





var X = 10;
X.toString(); //* converts number to string
X.toString(2) // converts number to string with binary representation
X.toString(8) // converts number to string with octal representation
X.toString(10) // converts number to string with decimal representation
X.toString(16) // converts number to string with hexadecimal representation


var X = 9.656; 
X.toExponential(); //* converts to string with rounded number written using exponential notation.
X.toExponential(); // 9.656е+0.
X.toExponential(0); // 1е+1.
X.toExponential(2); // 9.66е+0. 
X.toExponential(10); // 9.656000000е+0


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
 




////////////////////////////////





var stringName = 'abcdefghijkl \'w \"i \\ th \\ i\" n\' mnopqrstuvwz'; 
//!     _\'_ _\"_ _\\_ for these symbols _ ' " \ _ to be used within '' quotes   

stringName.length //* length of the string, number of characters
stringName.trim() //* removes whitespace
stringName.str(startCoordinate, length) //* extract part of string.
stringName.slice(startCoordinate, endCoordinate) //* extract part of string. negative values reverse the coordinate
stringName.substring(startCoordinate, endCoordinate) //* does NOT accept negative values
stringName.replace(searchValue, replaceValue) //* replaces value with another value. stops at first value. returns a new string. 
stringName.toUpperCase() & stringName.toLowerCase() //* transform string letters
stringName.concat(StringName2) //* joins 2 strings together
stringName.charAt(stringCoordinate) & stringName[stringCoordinate] //* string character at stringCoordinate
stringName.split(splitOnCharacter, limitValue) //* converts string to array. sOC defines split coordinates. limitValue limits the number of elements in array.
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





///////////////////////////////





function functionName(Parameter) {
  parameter //* local variable
  var X = 5; //* locally declared variable, can NOT be accessed outside
  return //* function end
}



var X = {
  color: 'red', //* property: propertyValue
  functionName: function() { return this.color} //* method, function stored as property
};

objectName.propertyName & objectName["propertyName"] //* access object
objectName.methodName() //* access object method





///////////////////////////////





const arrayName = [arrayElement1, arrayElement2, arrayElement3,] //* array uses numbers to access elements
//! array indexing starts with 0... 0 is the first element, 1 is the second element.
//* numbers, strigns, variables, objects and functions can be used in one array.

arrayName[arrayIndex]; //* access array element
arrayName[0]; // arrayElement1
arrayName[1]; // arrayElement2
document.getElementById().innerHTML = arrayName //* to access entire array use the arrayName

arrayName.length; //* returns the number of elements in the array
arrayName[arrayName.length - 1]; //* returns 'yellow'. we can use the array length to access the last element in the array. length - 1 = index of the last element. 

arrayName.push(newArrayElement) //* adds element to the array at the end
arrayName[index] = newArrayElement; //* defining yet undefined elements of the array will add it to the array at the specified index. 

arrayName.toString(); //* converts array to string with array elements separated by commas
arrayName.join(separatorCharacter) //* converts array to string with specified separator

arrayName.pop(); //* removes the last element from the array








































const arrayName = ['arrayElement1', 'arrayElement2', 'arrayElement3', 'arrayElement4', 'arrayElement5'];

let arrayLength = arrayName.length;
let finalResult = '';

for (let constant = 0; constant < arrayLength; constant++) { // 

    finalResult += `The is the "constant" "${constant}", its the index of array. The array element in index "${constant}" is "${arrayName[constant]}" \n`;

}

console.log(finalResult);





const arrayName = ['arrayElement1', 'arrayElement2', 'arrayElement3', 'arrayElement4', 'arrayElement5'];

let finalResult = '';

arrayName.forEach(functionName);

function functionName(constant) {
  finalResult += `${constant} \n`;

  /*
  Function parameter "constant" is a placeholder variable. its used to insert array elements into the function.
  The function starts with index 0 and ends with the last index.
  */
}




console.log(finalResult);














