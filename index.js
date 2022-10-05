

// Creating Random Number for image 1
let randomNumber1 = Math.floor(Math.random() * 6 + 1);

// Creating random number for image 2
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Changing Image 1

var changeImage1 = document.querySelector(".img1");

switch(randomNumber1){
  case 1:
  changeImage1.setAttribute("src", "images/dice1.png");
  break;
  case 2:
  changeImage1.setAttribute("src","images/dice2.png");
  break;
  case 3:
  changeImage1.setAttribute("src","images/dice3.png");
  break;
  case 4:
  changeImage1.setAttribute("src","images/dice4.png");
  break;
  case 5:
  changeImage1.setAttribute("src","images/dice5.png");
  break;
  case 6:
  changeImage1.setAttribute("src","images/dice6.png");
  break;
}

// Changing Image 2

var changeImage2 = document.querySelector(".img2");

switch(randomNumber2){
  case 1:
  changeImage2.setAttribute("src", "images/dice1.png");
  break;
  case 2:
  changeImage2.setAttribute("src","images/dice2.png");
  break;
  case 3:
  changeImage2.setAttribute("src","images/dice3.png");
  break;
  case 4:
  changeImage2.setAttribute("src","images/dice4.png");
  break;
  case 5:
  changeImage2.setAttribute("src","images/dice5.png");
  break;
  case 6:
  changeImage2.setAttribute("src","images/dice6.png");
  break;
}

var changeText = document.querySelector("h1");

if(randomNumber1 === randomNumber2){
  changeText.innerHTML = "DRAW";
}
else if (randomNumber1 > randomNumber2){
  changeText.innerHTML = '<i class="fa-solid fa-flag " style="color: #8B0000;"></i> Player 1 Won';
}
else {
  changeText.innerHTML = 'Player 2 Won <i class="fa-solid fa-flag " style="color: #8B0000;"></i>';
}
