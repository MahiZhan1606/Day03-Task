// JSON
// If we go further in depth, there are a few more things you need to know about JSON.  
// The code that we just ran can also be expressed by including ‘[]’ to contain the above three nodes.
// jsonData:  [
//     one: [11, 12, 13, 14, 15],
//     two: [21, 22, 23],
//     three: [31, 32]]
var json = {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]}
 
 for(var key in json.jsonData) {
    for (var key1 in json.jsonData[key]) {
        console.log(json.jsonData[key][key1])
    }
 }
 ‍


// For Loop
// The For Loop comes first because of its simplicity and ease of use. 
// It is a very user-friendly kind of loop that runs with a method of using a counter. 
// The value is first set with an appropriate condition, which is also called ‘initializing a loop’.
// Next, the terminal or final value is specified.
// The For Loop makes things really easy when you need to run a set of codes multiple times.

var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

// output
// 10
// 20
// 30
// 40
// 50


// For In Loop
// Another way of looping is the For In Loop. 
// Unlike the For Loop, this loop won’t be using a counter. 
// So this makes the whole process even more simple and hassle-free. 
// In fact, the For In Loop is essentially a simplified version of the For Loop.

var person = {
    fname: "Raj",
    lname: "Mohan",
    age: 26
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }

//  output
//  fname Raj 
//  lname Mohan
//  age 26

// for...of Statement 
// creates a loop iterating over iterable objects,
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. 
// It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//output
//a
//b
//c


// ForEach() Loop
// This method is used for looping through an array element...

var names = ["raj", "mohan", "ram", "mahi", "yazh"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}