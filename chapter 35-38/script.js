//////////////////// chapter 35-38 ::::::: Assignment Number 1 ////////////////////
function date () {
    var current_time = new Date;
    return current_time;
}

console.log(date())


//////////////////// chapter 35-38 ::::::: Assignment Number 2 ////////////////////
function greet_user (firdstname,secondname) {
    var greet = "Hi " + firdstname+ " " + secondname + " !"
    return greet;
}

console.log(greet_user(
    prompt("Please Enter your First Name !"),
    prompt("Please Enter your Last Name !")
))



//////////////////// chapter 35-38 ::::::: Assignment Number 3 ////////////////////
function addition (firstnum,secondnum) {
    var result = firstnum + secondnum 
    return result;
}

console.log(addition(
    Number(prompt("Please Enter First Number !")),
   Number(prompt("Please Enter Second Number !"))
))



//////////////////// chapter 35-38 ::::::: Assignment Number 4 ////////////////////
function calculator (fNum,op,sNum) {
    if (op === "+") {
        var calcResult = fNum + sNum
    } else if (op === "-") {
        calcResult = fNum - sNum
    } else if (op === "*") {
        calcResult = fNum * sNum
    } else if (op === "/") {
        calcResult = fNum / sNum
    } else {
        calcResult = "You Entered Invalid Operator !"
    }
    return calcResult;
}

console.log("Your Result Is : ",calculator(
    Number(prompt("Please Enter First Number !")),
    prompt("Please Enter Operator ( + , - , / , *) !"),
    Number(prompt("Please Enter Second Number !"))
))


//////////////////// chapter 35-38 ::::::: Assignment Number 5 ////////////////////
function squre (num) {
    var squre_calc = num * num 
    return squre_calc;
}
var squre_num = Number(prompt("Please Enter a Number to Get it's Squre !"))
console.log("The Squre of ",squre_num," is : ",squre(squre_num))

