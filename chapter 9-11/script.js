
////////// chapter 9-11 ::::::: Assignment Number 1 ///////////

var city = prompt("What Is Your City? \nkarachi multan faisalabad")

console.log("////////// chapter 9-11 ::::::: Assignment Number 1 ///////////")

if (city === "karachi"){
    alert("It is the city of Lights")
}else if (city === "multan"){
    alert("It is the city of Shah Rukn e Alam")
}else if (city === "faisalabad"){
    alert("It is the city of Faisal Mosque")
}


////////// chapter 9-11 ::::::: Assignment Number 2 ///////////

var gender = prompt("What Is Your Gender?")

console.log("////////// chapter 9-11 ::::::: Assignment Number 2 ///////////")

if (gender === "male"){
    alert("Good Morning Sir.")
}else if (gender === "female"){
    alert("Good Morning Ma'am.")
}


////////// chapter 9-11 ::::::: Assignment Number 3 ///////////

var signal = prompt("Write the traffic signal light's color.")

console.log("////////// chapter 9-11 ::::::: Assignment Number 3 ///////////")

if (signal === "red"){
    alert("Must Stop")
}else if (signal === "Yellow"){
    alert("Ready to Move")
}else if (signal === "green"){
    alert("Move Now")
}


////////// chapter 9-11 ::::::: Assignment Number 4 ///////////

var fuel = prompt("How much litters fuel is avail in Your car")

console.log("////////// chapter 9-11 ::::::: Assignment Number 4 ///////////")

if (fuel < 0.25){
    alert("Please Refill the fuel in your car")
}else{
    alert("Good ! Drive your car")
}



////////// chapter 9-11 ::::::: Assignment Number 6 ///////////


var subject1 = prompt("Enter First subject Name!")
var subject2 = prompt("Enter Second subject Name!")
var subject3 = prompt("Enter Third subject Name!")

var total_marks = 100;

var sub1_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject1))
var sub2_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject2))
var sub3_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject3))
var Percentage = (((sub1_obtained_marks + sub2_obtained_marks + sub3_obtained_marks) * 100) / (total_marks * 3))
var grade;
var remarks;
if(Percentage < 60 ){
    grade = "Fail."
    remarks = "Sorry"
}else if(Percentage >= 60 ){
    grade = "B"
    remarks = "you need to improve"
}else if(Percentage >= 70 ){
    grade = "A."
    remarks = "Good"
}else if(Percentage >= 80 ){
    grade = "A-one"
    remarks = "Exelent"
}


alert("Your result\n"
    + "Total Marks | " + (total_marks * 3)+ "\n"
    + "Obtained Marks | " + (sub1_obtained_marks + sub2_obtained_marks + sub3_obtained_marks)+ "\n"
    + "Percentage | " + Percentage + "%" + "\n"
    + "Grade | " + grade + "\n"
    + "Remarks | " + remarks
)