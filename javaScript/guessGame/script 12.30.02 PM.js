var flag = true;
while(flag){
    var rand = Math.floor(Math.random() * 20);
    alert(rand);

    var guess = prompt("Enter your number between 0-19");
    while( guess != rand ){
        if (guess < rand){
            alert("Your guess was to small");
            guess = prompt("Enter you number between 0-19");
        }
        if(guess > rand){
            alert("your guess was to large");
            guess = prompt("enter you number between 0-19")
        }
    }
    var countinue = prompt("you guessed corrctly!! do you want to play again? yes/no");
    if(countinue == "no"){
        alert("Ok exiting now");

        flag = false;
    }
}

