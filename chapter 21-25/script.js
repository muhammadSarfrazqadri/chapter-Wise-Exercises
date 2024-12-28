
//////////////////// chapter 21-25 ::::::: Assignment Number 1 ////////////////////
var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")
var full_name = first_name + " " + last_name
console.log("Hye " + full_name + " !")

//////////////////// chapter 21-25 ::::::: Assignment Number 2 ////////////////////
var mobile_name = prompt("Enter Name, Model & Color  of Your Favorite Phone !")

console.log("Your Favorite Phone is : " + mobile_name + "\nThe lenth of this string is : " + mobile_name.length)


//////////////////// chapter 21-25 ::::::: Assignment Number 3 ////////////////////

var pak = "Pakistani"

var index = pak.indexOf("n")
console.log("In 'Pakistani' The Index Of 'n' is : " + index)

//////////////////// chapter 21-25 ::::::: Assignment Number 4 ////////////////////

var str = "Hello World"

var index = str.lastIndexOf("l")
console.log("In 'Hello World' The lastIndex Of 'l' is : " + index)


//////////////////// chapter 21-25 ::::::: Assignment Number 5 ////////////////////

var pak = "Pakistani"

var character = pak.charAt(3)
console.log("In 'Pakistani' The charAt Of 3 is : " + character)


//////////////////// chapter 21-25 ::::::: Assignment Number 6 ////////////////////
var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")
var full_name = first_name.concat( last_name)
console.log("Hye " + full_name + " !")


//////////////////// chapter 21-25 ::::::: Assignment Number 7 ////////////////////

var city = "Headerabad"
console.log("City : ",city)
var replaced_city = city.replace("Header","Islam")

console.log("replaced City : " ,replaced_city)


//////////////////// chapter 21-25 ::::::: Assignment Number 8 ////////////////////

var message = "Ali and Sami are best friends. They play cricet and football tegether."
console.log("Message : ",message)
var replaced_message = message.replace("and","&")

console.log("replaced Message : " ,replaced_message)


//////////////////// chapter 21-25 ::::::: Assignment Number 9 ////////////////////

var string = "472"
console.log("Value : ",string)
console.log("Type of Value : ",typeof(string))
var convert_string = Number(string)

console.log("Value : ",string)
console.log("Type of Value : ",typeof(convert_string))


//////////////////// chapter 21-25 ::::::: Assignment Number 10-11 ////////////////////
var input_lowercase = prompt("Enter Something")
var uppercase = input_lowercase.toUpperCase()
console.log("Uppercase : ", uppercase)

var words = input_lowercase.toLowerCase().split(" ")
for (var i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
}
var titlecase = words.join(" ")
console.log("Titlecase : ", titlecase)


//////////////////// chapter 21-25 ::::::: Assignment Number 12 ////////////////////

var num = prompt("Enter a decimal Number")

console.log("your Number : " , num)
console.log("Type of your Number : " , typeof(num))
var result = num.replace(".","")
console.log("Result : ", result)