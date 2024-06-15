var randomNum = Math.floor(Math.random()*6) + 1;
console.log(randomNum)
var randomNum2 = Math.floor(Math.random()*6) + 1;
console.log(randomNum)

// const idd1 = document.querySelector(".dice-1")
// const idd2 = document.querySelector(".dice-2")
// // idd1.innerHTML="<img  src='./images/dice1.png' />"

// idd1.innerHTML=`<img  src='./images/dice${randomNum}.png' />`

// idd2.innerHTML=`<img  src='./images/dice${randomNum2}.png' />`



// const title = document.querySelector(".container h1");

// if ( randomNum < randomNum2 ){
//     title.innerHTML="Player 2 Wins!🚩"
// }
// else if (randomNum > randomNum2) title.innerHTML="🚩Player 1 Wins!"
// else title.innerHTML="Draw!"

//--------------------------------- Angelas' sol--------------------
const img1src = "./images/dice" + randomNum + ".png"
const img2src = "./images/dice" + randomNum2 + ".png"
console.log(img1src)
const images = document.querySelectorAll("img")
const img1 = images[0]
const img2 = images[1]

img1.setAttribute("src", img1src)
img2.setAttribute("src", img2src)

const title = document.querySelector(".container h1");

if ( randomNum < randomNum2 ){
    title.innerHTML="Player 2 Wins!🚩"
}
else if (randomNum > randomNum2) title.innerHTML="🚩Player 1 Wins!"
else title.innerHTML="Draw!"
