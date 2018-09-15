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
};

const weapons = {
  daggerItem : {
    type : "dagger",
    damage : 2,
  },

}

function rest(object){
  let restore = object
    if (restore.health < 10) {
      restore.health = 10;
    }
    object = restore;
    return object;
}

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
var heroPoints = hero.points

//this code sets a starting position for the square
let x = 70;
let y = canvas.height/2-25;

//this declares movement speed
let dx=7;
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
  //this code makes a black square
  ctx.beginPath();
  ctx.rect(heroX,heroY, heroWidth, heroHeight);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

//this code sets an interval of 10 miliseconds to update the canvas
function draw(){
  //this code adds a point counter to the interval
  heroPoints = heroPoints+1;
  hero.points = heroPoints;
  console.log(heroPoints);

  //this code clears the canvas on every frame
  ctx.clearRect(0,0,canvas.width,canvas.height);
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
  if(x + dx > canvas.width || x + dx < 0) {
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

}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
setInterval(draw,10);


// Write your JS here
