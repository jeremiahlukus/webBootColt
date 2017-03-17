var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var totalDisplay = document.querySelector("p span");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var total =5;
p1Button.addEventListener("click", function() {

    if(p1Score > total - 1){
        alert("Player One WINS!!")
    }else{
        p1Score++;
        p1Display.textContent = p1Score;

    }
});

p2Button.addEventListener("click", function() {

    if(p2Score > total - 1){
        alert("Player Two WINS!!")
    }else{
        p2Score++;
        p2Display.textContent = p2Score;

    }
});

reset.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent =p2Score;
});

numInput.addEventListener("change", function(){
   totalDisplay.textContent = numInput.value;
   total = Number(numInput.value);
});
