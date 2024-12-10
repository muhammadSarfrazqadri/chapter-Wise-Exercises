

////////// chapter 6-9 ::::::: Assignment Number 1 ///////////


var a = prompt("Enter the Value of 'a'")
console.log("////////// chapter 6-9 ::::::: Assignment Number 1 ///////////")
console.log("The Value of 'a' is : " + a)

var a_post_ink = a++
a = a_post_ink
console.log("The Value of 'a++' is : " + (a++) + "\nNow The Value of 'a' is : " + a)

var a_post_dec = a--
a = a_post_dec
console.log("The Value of 'a--' is : " + (a--) + "\nNow The Value of 'a' is : " + a)

var a_pre_ink = ++a
a = a_pre_ink
console.log("The Value of '++a' is : " + (++a) + "\nNow The Value of 'a' is : " + a)

var a_pre_dec = --a
a = a_pre_dec
console.log("The Value of '--a' is : " + (--a) + "\nNow The Value of 'a' is : " + a)
console.log(" ")


////////// chapter 6-9 ::::::: Assignment Number 2 ///////////



var a = prompt("Enter the Value of 'a'")
var b = prompt("Enter the Value of 'b'")
console.log("////////// chapter 6-9 ::::::: Assignment Number 2 ///////////")

console.log("The Value of '(--a - --b)' is : " + (--a - --b))
console.log("The Value of '(--a - b--)' is : " + (--a - b--))
console.log("The Value of '(--a - ++b)' is : " + (--a - ++b))
console.log("The Value of '(--a - b++)' is : " + (--a - b++))
console.log("The Value of '(--b - --a)' is : " + (--b - --a))
console.log("The Value of '(--b - a--)' is : " + (--b - a--))
console.log("The Value of '(--b - ++a)' is : " + (--b - ++a))
console.log("The Value of '(--b - a++)' is : " + (--b - a++))

console.log("The Value of '(++a - --b)' is : " + (++a - --b))
console.log("The Value of '(++a - b--)' is : " + (++a - b--))
console.log("The Value of '(++a - ++b)' is : " + (++a - ++b))
console.log("The Value of '(++a - b++)' is : " + (++a - b++))
console.log("The Value of '(++b - --a)' is : " + (++b - --a))
console.log("The Value of '(++b - a--)' is : " + (++b - a--))
console.log("The Value of '(++b - ++a)' is : " + (++b - ++a))
console.log("The Value of '(++b - a++)' is : " + (++b - a++))
console.log(" ")


////////// chapter 6-9 ::::::: Assignment Number 3 ///////////


console.log("////////// chapter 6-9 ::::::: Assignment Number 3 ///////////")

var user_name = prompt("Enter your Name!")
console.log("Hi " + user_name + " I hope You will be fine.")
console.log(" ")




////////// chapter 6-9 ::::::: Assignment Number 4 ///////////

console.log("////////// chapter 6-9 ::::::: Assignment Number 4 ///////////")

console.log("fourth number assignment is not decleared in the assingnment list.")
console.log(" ")




////////// chapter 6-9 ::::::: Assignment Number 5 ///////////


var a = 5

a = prompt("Enter a number To check that's table. \nIf you will not Enter any number You will see the table of '5'.") || 5
console.log("////////// chapter 6-9 ::::::: Assignment Number 5 ///////////")
console.log(
    a + " * 1 = " + (a * 1) + "\n" +
    a + " * 2 = " + (a * 2) + "\n" +
    a + " * 3 = " + (a * 3) + "\n" +
    a + " * 4 = " + (a * 4) + "\n" +
    a + " * 5 = " + (a * 5) + "\n" +
    a + " * 6 = " + (a * 6) + "\n" +
    a + " * 7 = " + (a * 7) + "\n" +
    a + " * 8 = " + (a * 8) + "\n" +
    a + " * 9 = " + (a * 9) + "\n" +
    a + " * 10 = " + (a * 10) + "\n"
)
console.log(" ")




////////// chapter 6-9 ::::::: Assignment Number 6 ///////////


var subject1 = prompt("Enter First subject Name!")
var subject2 = prompt("Enter Second subject Name!")
var subject3 = prompt("Enter Third subject Name!")

var total_marks = 100;

var sub1_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject1))
var sub2_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject2))
var sub3_obtained_marks = Number(prompt("Enter Obtained Marks of " + subject3))


console.log("////////// chapter 6-9 ::::::: Assignment Number 6 ///////////")
console.log("Your Rusult")
console.log("subjects | Total Marks | obtained Marks\n"
    + subject1 + " | " + total_marks + " | " + sub1_obtained_marks + "\n"
    + subject2 + " | " + total_marks + " | " + sub2_obtained_marks + "\n"
    + subject3 + " | " + total_marks + " | " + sub3_obtained_marks + "\n"
    + "Your Total obtained Marks are = " + (total_marks * 3) + "/" + (sub1_obtained_marks + sub2_obtained_marks + sub3_obtained_marks) + "\n" + "Your Percentage is = " + (((sub1_obtained_marks + sub2_obtained_marks + sub3_obtained_marks) * 100) / (total_marks * 3)) + "%"
)



////////// chapter 6-9 ::::::: Assignments Completed ///////////