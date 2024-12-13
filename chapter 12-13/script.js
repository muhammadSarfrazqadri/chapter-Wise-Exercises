
//////////////////// chapter 12-13 ::::::: Assignment Number 1 ////////////////////

var user_entered_charachter = prompt("Enter a single character!")

var ascii = user_entered_charachter.charCodeAt(0)

if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a number.")
} else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor an English letter.");
}




//////////////////// chapter 12-13 ::::::: Assignment Number 2 ////////////////////

var num1 = Number(prompt("Enter First Number!"))
var num2 = Number(prompt("Enter Second Number!"))

if (num1 < num2) {
    console.log(num2 + " is larger.")
} else if (num1 > num2) {
    console.log(num1 + " is larger.")
} else {
    console.log("Both numbers are equal.")
}



//////////////////// chapter 12-13 ::::::: Assignment Number 3 ////////////////////


var input = Number(prompt("Enter a Number!"))

if (input < 0) {
    console.log("This is Nagative Value.")
} else if (input > 0) {
    console.log("This is Positive Value.")
} else if (input === 0) {
    console.log("This Value is equal to '0'.")
}


//////////////////// chapter 12-13 ::::::: Assignment Number 4 ////////////////////


var input = String(prompt("Enter a Character! \nif your entered character will be from vawel, Result will show by true otherwise by false."))
var input_lower = input.toLowerCase()

if (input_lower === "a" || input_lower === "e" || input_lower === "i" || input_lower === "o" || input_lower === "u") {
    console.log("True")
} else {
    console.log("False")
}


//////////////////// chapter 12-13 ::::::: Assignment Number 5 ////////////////////

var Password = "12345"
var input = prompt("Please Enter Your Password.")

if (input === Password) {
    console.log("Correct!")
} else if (!Password) {
    console.log("Please Enter Your Password.")
} else {
    console.log("Incorrect Password!")
}



//////////////////// chapter 12-13 ::::::: Assignment Number 6 ////////////////////

var greeting;
var hours = 13;

if (hours < 18) {
    greeting = "Good Day."
} else {
    greeting = "Good evening."
}




//////////////////// chapter 12-13 ::::::: Assignment Number 7 ////////////////////


var time = Number(prompt("Enter time in 24-hour format (e.g., 1900):"));


if (time >= 0 && time < 1200) {
    if (time === 0) {
        console.log("Time is: " + "12" + " AM");
    } else {
        console.log("Time is: " + (time / 100) + " AM");
    }
} else if (time >= 1200 && time < 1300) {
    console.log("Time is: 12 PM");
} else if (time >= 1300 && time <= 2359) {
    var hour = Math.floor(time / 100) - 12
    console.log("Time is: " + hour + " PM")
} else {
    console.log("Invalid time entered.")
}
