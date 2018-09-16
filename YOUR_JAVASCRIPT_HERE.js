const hero = {
  name : "Captain Obvious",
  heroic : true,
  inventory : [],
  health : 10,
  weapon : {
    type : "sarcasm",
    damage : 2,
  },
  points : 0,
  lives : 3,
};

const weapons = {
  daggerItem : {
    type : "dagger",
    damage : 2,
  },

};

function rest(object){
  let restore = object
    if (restore.health < 10) {
      restore.health = 10;
    }
    object = restore;
    return object;
};

function restoreHealth(){
    console.log("inn image has been clicked");
    hero.health = 10;
  }

function pickUpItem(heroperson, object){
  let dude = heroperson;
  let item = object;
    dude.inventory.push(item);
    console.log("item added to inventory");
    heroperson = dude;
    return heroperson;
}

function daggerItemGet(){
    console.log("dagger image has been clicked");
    hero.inventory.push(weapons.daggerItem);
    console.log("dagger added to inventory");
  }

function equipWeapon(object){
  let newObject = object;
  let newWeapon = newObject.inventory[0];
  let oldWeapon = newObject.weapon;
    if (newObject.inventory.length===0){
      console.log("cannot equip items if inventory is empty")
    }
    else {
    newObject.inventory.push(oldWeapon);
    newObject.weapon = newWeapon;
    object = newObject;
    return object;
    }
}

function bagClick(){
  console.log("bag image has been clicked");
    equipWeapon(hero);
}

function updateDisplayBar(){
  let userName = document.getElementById("user").innerText;
    userName = hero.name;
}

function displayStats(){
  console.log("Display stat button has been clicked")
  let heroStats = `Your name was ${hero.name}, `;
  updateDisplayBar();
}


function getName(){
  let heroName = document.getElementById("name");
  hero.name = heroName;
  console.log(`hero name has been changed to ${hero.name}`)
}

//this code makes a canvas for the game
var canvas = document.getElementById("runTheTest");
var ctx = canvas.getContext("2d");

//this code declares a variable to store points
var heroPoints = hero.points;

//this code declares a variable to store lives
var heroLives = hero.lives;

//this code sets a starting position for the black square
let x = 70;
let y = canvas.height/2-25;

//this declares movement speed
let dx=10;
let dy=1;

//this declares the size of the black box
var boxSize = 50;

//this declares the dimensions of the hero
const heroHeight = 50;
const heroWidth =50;
var heroX = (canvas.width-heroWidth)/2;
var heroY = (canvas.height-heroHeight/2);

//this declares keypresses as boolean values
var upPress = false;
var downPress = false;
var rightPress = false;
var leftPress = false;

//this code controls up-down-left-right movement
function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPress = true;
  }
  else if (e.keyCode ==37) {
    leftPress = true;
  }
  else if (e.keyCode ==38) {
    upPress = true;
  }
  else if (e.keyCode ==40) {
    downPress = true;
  }
}

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPress = false;
  }
  else if (e.keyCode ==37) {
    leftPress = false;
  }
  else if (e.keyCode ==38) {
    upPress = false;
  }
  else if (e.keyCode ==40) {
    downPress = false;
  }
}

function drawBox(){
  //this code makes a black square
  ctx.beginPath();
  ctx.rect(x, y, 50, 50);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function drawHero(){
  //this code makes a white square
  ctx.beginPath();
  ctx.rect(heroX,heroY, heroWidth, heroHeight);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
    ctx.font = "12px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText(`Lives: ${heroLives} - Time: ${parseInt(heroPoints/100)} seconds`,10,395);
}

//this code tries to make a collision box
//x and y are top left corner all other coords are derived from it
let villainBox = {
}
let heroBox = {
}

//this section checks the bottom slider

let bottomSlider = {
  slideBlack : [villainBox.bottomLeft,villainBox.bottomRight],
  slideWhite : [heroBox.bottomLeft,heroBox.bottomRight],
}

let leftSlider = {
  slideBlack : [villainBox.topLeft,villainBox.bottomLeft],
  slideWhite : [heroBox.topLeft,heroBox.bottomLeft],
}

let colBottom = false;

function checkBottom(){
  //console.log(`bottom collision detection running`);
  //console.log(villainBox.bottomRight[0]);
  if(heroBox.bottomRight[0]>villainBox.bottomLeft[0]&&heroBox.bottomLeft[0]<villainBox.bottomRight[0]&&heroBox.bottomLeft[1]>villainBox.topLeft[1]&&heroBox.topLeft[1]<villainBox.bottomLeft[1]){
    console.log("collision triggered");
    dx = -dx;
    heroLives = heroLives-1;
    //console.log("black box dx reversed");
    colBottom = true;
  }
}

//this function is called upon at the end of the draw cycle to check collision
function updateCol(){
  villainBox = {
    topLeft : [x, y],
    topRight : [x+50,y],
    bottomLeft : [x,y+50],
    bottomRight: [x+50,y+50],
  }
  heroBox = {
    topLeft : [heroX, heroY],
    topRight: [heroX+50,heroY],
    bottomLeft: [heroX,heroY+50],
    bottomRight: [heroX+50,heroY+50],
  }
  //console.log("collision detection is being called");
  checkBottom();

}


//this code sets an interval of 10 miliseconds to update the canvas
function draw(){
  //this code adjusts to the user's screen size
  ctx.canvas.width = window.innerWidth;

  //this code controls the black box speed increase


  //this code controls the end game state
  updateCol();
  //this code adds a point counter to the interval
  heroPoints = heroPoints+1;
  hero.points = heroPoints;
  //checks
  //console.log(heroPoints);
  //console.lo(heroBox, villainBox);


  //this code clears the canvas on every frame
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawScore();
  drawBox();
  drawHero();

  //this updates x and y values every frame
  x+= dx;
  y+= dy;

  //this code reverses the direction of the black box if it hits a border
  //this if statement controls the top border
  if(y + dy < 0) {
    dy = -dy;
  }
  //this controls the bottom border
  if(y+dy > canvas.height-50){
    dy = -dy
  }

  //this controls the left and right border
  if(x + dx > canvas.width-50 || x + dx < 0) {
      dx = -dx;
  }


  //this code controls movement on canvas
  if(rightPress && heroX<canvas.width-heroWidth){
    heroX += 7;
  }
  else if(leftPress && heroX > 0){
    heroX -= 7;
  }
  else if(upPress && heroY > 0){
    heroY -= 7;
  }
  else if(downPress && heroY < canvas.height-heroWidth){
    heroY += 7;
  }
  requestAnimationFrame(draw);
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
draw();

// Write your JS here

function updateCollision(){
  heroBox = [x, y];
  villainBox = [heroX, heroY];
}
