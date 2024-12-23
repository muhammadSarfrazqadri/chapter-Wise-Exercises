
//////////////////// chapter 17-20 ::::::: Assignment Number 1 ////////////////////

var array = [
    [] , [] , []
];


//////////////////// chapter 17-20 ::::::: Assignment Number 2 ////////////////////

var array = [
    [0, 1, 2, 3] ,
    [1, 0, 1, 2] ,
    [2, 1, 0, 1]
];

//////////////////// chapter 17-20 ::::::: Assignment Number 3 ////////////////////

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length ; i++){
    console.log("This number is " + array[i])
}


//////////////////// chapter 17-20 ::::::: Assignment Number 4-5 ////////////////////


// var input = Number(prompt("Enter a number to show its multipication table"))
// var length = Number(prompt("Enter the length multipication table"))

// for (var i = 0; i < length; i++){
//     console.log(input + " * " + (i+1) + " = " + (input*(i+1)))
// }


//////////////////// chapter 17-20 ::::::: Assignment Number 6 ////////////////////

var fruits = ["apple", "banana", "Mango", "Orange", "Strawberry"]

for (var i = 0; i < fruits.length ; i++){
    console.log("Element at Index " + i + " " + fruits[i])
}


//////////////////// chapter 17-20 ::::::: Assignment Number 7 ////////////////////

var counting = [];

for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting: ", counting.join(", "));

var reverse_counting = [];
for (var i = 10; i >= 1; --i) {
    reverse_counting.push(i);
}
console.log("Reverse Counting: ", reverse_counting.join(", "));

var even = [];
for (var i = 0; i <= 20; (i += 2)) {
    even.push(i);
}
console.log("Even: ", even.join(", "));


var odd = [];
for (var i = 1; i <= 20; (i += 2)) {
    odd.push(i);
}
console.log("Odd: ", odd.join(", "));


var series = [];
for (var i = 2; i <= 20; (i += 2)) {
    series.push(i);
}
console.log("Even: ", series.join("k, ") + "k");

