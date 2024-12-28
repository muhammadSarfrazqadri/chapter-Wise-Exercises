//////////////////// chapter 26-30 ::::::: Assignment Number 1 ////////////////////

var number = prompt("Please Enter a Positive Decimal Number !")
console.log("Number : " , number)
console.log("Round off Value : " , Math.round(number))
console.log("Floor : " , Math.floor(number))
console.log("Ceil : " , Math.ceil(number))


//////////////////// chapter 26-30 ::::::: Assignment Number 2 ////////////////////

var N_number = prompt("Please Enter a Nagitive Decimal Number !")
console.log("Number : " , N_number)
console.log("Round off Value : " , Math.round(N_number))
console.log("Floor : " , Math.floor(N_number))
console.log("Ceil : " , Math.ceil(N_number))


//////////////////// chapter 26-30 ::::::: Assignment Number 3 ////////////////////

var nbr = prompt("Please Enter a Nagitive Number !")
console.log("Absolute Number : " , Math.abs(nbr))


//////////////////// chapter 26-30 ::::::: Assignment Number 4 ////////////////////

var rndom_number = Math.random()
var dice_value = Math.floor((rndom_number * 6) + 1)

console.log("Dice Value is : ", dice_value)


//////////////////// chapter 26-30 ::::::: Assignment Number 5 ////////////////////

var coin_toss = Math.random()
if (coin_toss < 0.5) {
    console.log("Result : Heads")
} else {
    console.log("Result : Tails")
}


//////////////////// chapter 26-30 ::::::: Assignment Number 6 ////////////////////


var rndom_number = Math.random()
var dice_value_1to100 = Math.floor((rndom_number * 100) + 1)

console.log("Random Value between 1 to 100 : ", dice_value_1to100)


//////////////////// chapter 26-30 ::::::: Assignment Number 7 ////////////////////

var input_weight = prompt("Enter your weight in kilograms (e.g., 50, 50kgs, 50.2, 50.2kilograms):");
var weight = parseFloat(input_weight)

if (!isNaN(weight)) {
    console.log("Your weight is: " + weight + " kilograms.");
} else {
    console.log("Invalid input. Please enter a valid weight.");
}


//////////////////// chapter 26-30 ::::::: Assignment Number 8 ////////////////////

var random_number = Math.random()
var dice_value_1to10 = Math.floor((random_number * 10) + 1)

var user_number = prompt("Please Enter a Number between 1 to 10 !")
if (user_number === dice_value_1to10) {
    console.log("Great! Your Answer is Correct.")
} else {
    console.log("Try Again! Your Answer is Incorrect. \n Correct Answer is : ", dice_value_1to10)
}
