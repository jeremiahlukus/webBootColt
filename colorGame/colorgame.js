var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var flag = true;

colorDisplay.textContent = pickedColor;
addColors();


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    reformat(3);
   hideBottom();
    flag = false;
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    reformat(6);  
    showBottom();
    flag = true;
})


resetButton.addEventListener("click", function(){
    h1.style.background = "steelblue";
    if(flag){ reformat(6);
    }else{ reformat(3);}
    this.textContent = "New Colors";
})

function addColors(){
    for(let i = 0; i < squares.length; i++){
        //Add colors to squares
        squares[i].style.background = colors[i];
        //Add listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            //Checks to see if clicked color is correct 
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play again?";
            }else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
};

function changeColors (color){
    //loop through all squares and switch their color with the given one
    for(let i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var rand =  Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num){
    var arr = [];

    for(let i = 0; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r =  Math.floor(Math.random() *256);
    var g =  Math.floor(Math.random() *256);
    var b =  Math.floor(Math.random() *256);
    return "rgb(" + r + ", "+ g +", "+ b +")"
}

function hideBottom(){
    for(let i =3; i < squares.length; i++){
        squares[i].style.display = "none";
    }
}

function showBottom(){
    for(let i =3; i < squares.length; i++){
        squares[i].style.display = "block";
    }
}

function reformat(num){
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    addColors();
}
