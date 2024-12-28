//////////////////// chapter 31-34 ::::::: Assignment Number 1 ////////////////////

var date = new Date
console.log(date)


//////////////////// chapter 31-34 ::::::: Assignment Number 2 ////////////////////
var months_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novrmber", "December"]
var date = new Date
var corrent_month = date.getMonth()
console.log("Current Month is : ", months_name[corrent_month])


//////////////////// chapter 31-34 ::::::: Assignment Number 3 ////////////////////
var days_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"]
var date = new Date
var corrent_day = date.getDay()
var three_words = days_name[corrent_day].slice(0, 3)
console.log("Current Day is : ", three_words)


//////////////////// chapter 31-34 ::::::: Assignment Number 4 ////////////////////
var days_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"]
var date = new Date
var corrent_day = date.getDay()
var Current_day_name = days_name[corrent_day]
if (corrent_day === "Sunday" || "Saturday") {
    console.log("It's Fun Day !")
} else {
    console.log("It's Not a Fun Day !")
}


//////////////////// chapter 31-34 ::::::: Assignment Number 5 ////////////////////
var date = new Date
var corrent_date = date.getDate()
if (corrent_date < 16) {
    console.log("First fifteen Days of the Month !")
} else {
    console.log("Last Days of the Month !")
}


//////////////////// chapter 31-34 ::::::: Assignment Number 6 ////////////////////
var date = new Date
var time_1970 = date.getTime()

console.log("The Current Date & Time is : ", date)
console.log("The Miliseconds from '1 Jan 1970' to Now are : ", time_1970)
console.log("The Minutes from '1 Jan 1970' to Now are : ", ((time_1970 / 1000) / 60))


//////////////////// chapter 31-34 ::::::: Assignment Number 7 ////////////////////
var date = new Date
var hours = date.getHours()
if (hours < 12) {
    console.log("Now is : Am")
} else {
    console.log("Now is : Pm")
}



//////////////////// chapter 31-34 ::::::: Assignment Number 8 ////////////////////
var latter_date = new Date("dec 31, 2027")
console.log("The lattter Date is : " , latter_date)


//////////////////// chapter 31-34 ::::::: Assignment Number 9 ////////////////////
var latter_date = new Date("march 24, 2024")
var today = new Date()
var passed_days = today - latter_date

console.log(Math.floor(passed_days / (1000 * 60 * 60 * 24)) + " days Have passed since 1st Ramzan 2024")


//////////////////// chapter 31-34 ::::::: Assignment Number 10 ////////////////////
var start_of_2024 = new Date("jan 1, 2024")
var today = new Date()
var difference_milliseconds = today - start_of_2024
var difference_seconds = Math.floor(difference_milliseconds / 1000)

console.log("On reference date " + today + ", " + difference_seconds + " seconds had passed since beginning of 2024")


//////////////////// chapter 31-34 ::::::: Assignment Number 11 ////////////////////
var date = new Date
console.log("Current date and time : ",date)
var ago_time = date.getHours() - 1
var passed_hour = date.setHours(ago_time)
console.log("One hour ago Time was : ",date)


//////////////////// chapter 31-34 ::::::: Assignment Number 12 ////////////////////
var date = new Date
console.log("Current Year is : ",date)
var ago_year = date.getFullYear() - 100
var passed = date.setFullYear(ago_year)
console.log("One Hundred Year ago Time was : ",date)


//////////////////// chapter 31-34 ::::::: Assignment Number 13 ////////////////////
var date = new Date
var age = prompt("Enter Your Age !")
var age_year = date.getFullYear() - age
console.log("Your Age is  : ", age)
console.log("Your Birth Year is  : ", age_year)


//////////////////// chapter 31-34 ::::::: Assignment Number 14 ////////////////////

var customer_name = prompt("Enter Your Name.")
var current_month = prompt("Enter Month.")
var number_of_units = prompt("Enter Units.");
var charges_perUnit = 16;
var late_payment_surcharge = 350;

var net_amount_payable = (number_of_units * charges_perUnit).toFixed(2)
var gross_amount_payable = (parseFloat(net_amount_payable) + late_payment_surcharge).toFixed(2);

console.log("K-Electric Bill");
console.log("Customer Name: " + customer_name);
console.log("Month: " + current_month);
console.log("Number of units: " + number_of_units);
console.log("Charges per unit: " + charges_perUnit)
console.log("Net Amount Payable (within Due Date): " + net_amount_payable);
console.log("Late Payment Surcharge: " + late_payment_surcharge);
console.log("Gross Amount Payable (after Due Date): " + gross_amount_payable);

