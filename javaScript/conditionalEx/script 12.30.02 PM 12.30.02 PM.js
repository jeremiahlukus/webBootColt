var age = prompt("Enter your age");
alert("HEY")
if (age < 0){
    alert("you cannot enter a negitive number")
}
if(age == 21){
    alert("HAPPY 21st b-day")
}
// See if the age is odd
if(age%2 != 0){
    alert("your age is odd")
}
//See if number is a perfect square
if (Math.sqrt(age)*Math.sqrt(age) == age  ){
    alert("this number is a perfect square")
}

