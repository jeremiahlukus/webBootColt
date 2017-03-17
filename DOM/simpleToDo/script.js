var firstli = document.querySelector("li");
var secli = document.getElementsByTagName("li")[1];
var thirdli = document.getElementsByTagName("li")[2];

firstli.addEventListener("mouseover", function(){
    firstli.style.color = "green";
});
firstli.addEventListener("mouseout", function(){
    firstli.style.color = "black";
});

secli.addEventListener("mouseover", function(){
    secli.style.color = "purple";
});
secli.addEventListener("mouseout", function(){
    secli.style.color = "black";
});

thirdli.addEventListener("mouseover", function(){
    thirdli.style.color = "red";
});
thirdli.addEventListener("mouseout", function(){
    thirdli.style.color = "black";
});
