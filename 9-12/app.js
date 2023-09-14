var city = prompt("input your city")
if (city == "karachi"){
    alert("welcome to city oif light")
} 


var gender = prompt ("input your gender")
if(gender == "male"){
    alert("good morning sir")
}
else if(gender == "female"){
    alert("goodmorning mam")
}

else {
    alert("type yor gender correct")
}

var signal = prompt ("trafic signal color")
if (signal == "red"){
    alert("must stop")
}
else if(signal == "Yellow"){
    alert("redy to move")
}

else if(signal == "Green"){
    alert("Move now")
}

else{
    alert("input correct color")
}

var fuel = prompt("enter your current fuel")
if(fuel == "0.25 litres"){
    alert("Please refill the fuel in your car")
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (++b === 83){
alert("given condition for variable b is true");
}

 var c = 12;
if (++c === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (c++ < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
   else(false)
     alert("False");


 if("car" < "cat"){
    alert("car is smaller than cat");
    }





debugger
    var total_mark = prompt("enter total marks");
    var math = +prompt("enter your math marks");
    var urdu = +prompt("enter your urdu marks");
    var eng = +prompt("enter your eng marks");

    var marks_obtained = math+urdu+eng
    var percentage = marks_obtained / total_mark *100
    alert(marks_obtained);
    alert(percentage);

    if(percentage >= 80){
        alert("A-One, Excellent")
    }
    else if(percentage >= 70){
        alert("A, Good")
    }
    else if (percentage >=60){
        alert("B,You Need to improve")
    }
    else if(percentage < 60){
        alert("Fail, Sorry")
    }


var num = 4
var gusse_num = +prompt("gusse 1 to 10 number")
if(gusse_num == num){
    alert("bingo! you win")
}
else if (gusse_num == num+1){
    alert("you are soo closs")
}
else{
    alert("try again")
}


var given_num = +prompt("input num one number whoes divisible BY 3 ")
if(given_num % 3 == 0){
    alert("yes its num divisible by 3")
}
else{
    alert("this num not divisible by 3")
}


var numbers = +prompt("Enter One Number ")
if(numbers % 2 === 0){
    alert("This is even Number")
}else{
    alert("This is odd Number")
}

var take_num = +prompt("enter temperature")
if(take_num >= 40 ){
    alert("“It is too hot outside")
}

else if(take_num >= 30 ){
    alert("The Weather today is Normal.")
}

else if(take_num >= 20 ){
    alert("Today’s Weather is cool.")
}

else if(take_num >= 10 ){
    alert("OMG! Today’s weather is so Cool.")
}


var first_num = +prompt ("enter first value")
var Second_num = +prompt ("enter second value")
var operators = prompt ("Enter One Operator +, -, *, /, % ")

if (operators =="+") { 
    alert(first_num + Second_num)
}

if (operators == "-") { 
    alert(first_num - Second_num)
}

if (operators =="*")  { 
    alert(first_num * Second_num)
}

if (operators =="/")  { 
    alert(first_num / Second_num)
}

if (operators =="%") { 
    alert(first_num % Second_num)
}



var inputChar = prompt("Enter a character (number or string):");

// Convert the input character to its ASCII code
var charCode = inputChar.charCodeAt(0);

// Check if it's a number
if (charCode >= 48 && charCode <= 57) {
alert("The input is a number.");
}
// Check if it's an uppercase letter
else if (charCode >= 65 && charCode <= 90) {
  alert("The input is an uppercase letter.");
}
// Check if it's a lowercase letter
else if (charCode >= 97 && charCode <= 122) {
  alert("The input is a lowercase letter.");
}
// If none of the above conditions match, it's not a valid input
else {
  alert("Invalid input. Please enter a character.");
}

var integer_one = +prompt("Enter 1st integer")
var integer_two = +prompt("Enter 2nd Integer");

if(integer_one === integer_two){
    alert("Both integers are Equals")
}
else if(integer_one > integer_two){
    alert("The Larger Integer is" +" "+ integer_one )
}
else if(integer_two > integer_one){
    alert("The Larger Integer is" +" "+ integer_two )
}

var input_num = +prompt("Input One Number");

if(input_num === 0){
    alert("This number is zero")
}else if(input_num > 0){
    alert("input number is positive")
}else{
    alert("input number is negative")
}

var vowels = prompt("Enter vowels Letters")

if(vowels === "a"|| vowels === "e" || vowels === "i" || vowels === "o" || vowels ==="u"){
   alert("True")
}else{
    alert("False")
}

var paswoard = "yammox111";
var pass_vaild = prompt("enter your paswoard")

if (pass_vaild == "") {
    alert("pleace enter your paswoard")
}
else if(pass_vaild === paswoard){
    alert("correct paswoard")
}
else{
    alert("pleace enter correct paswoard")
}

var greeting;
var hour = 13;
if (hour < 18) {
alert (greeting = "Good day")}
else{
alert (greeting = "Good evening")
}


var time = +prompt("enter time")

if(time >= 0 && time < 1200){
    alert("Good Morning")
}else if(time >=1200 && time <1700){
    alert("Good afternoon")
}else if(time >=1700 && time < 2100){
    alert("Good Evening")
}else if(time >=2100 && time < 2359){
    alert("Good Night")
}
