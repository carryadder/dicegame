//variables




//dice1 

var n1 = Math.random()*6;
n1 = Math.floor(n1);
n1++;

document.querySelector(".img1").setAttribute("src", "images/dice" + n1 + ".png");


// dice 2 
var n2 = Math.random()*6;
n2 = Math.floor(n2);
n2++;
document.querySelector(".img2").setAttribute("src", "images/dice" + n2 + ".png");

    
if (n1 > n2) {
    document.querySelector("h1").textContent = "Player 1 Win ❤️!"
}
else if (n1 < n2) {
    document.querySelector("h1").textContent = "Player 2 Win ❤️!"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}




