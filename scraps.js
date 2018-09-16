//these are nonworking bits of code and stuff I copy pasted and fiddled with
//full disclosure sometimes I looked at the gamelogic file to figure out why certain code wasn't working with the test

const "hero" = {
  name : "Captain Obvious",
  hero : true,
  inventory : [],
  health : 10,
  weapon : {
    type : "sarcasm",
    damage : 2,
  },
}

function rest(object){
    object.heath = 10; //so this doesn't work...
}

function rest(object){
    this.heath = 10; //this doesn't work either
}

function rest(object){
    object = object.heath;
    object = 10;
} //nope

function rest(object){
    if (object.health<10)
      object.health = 10
}

function rest(object){
  let restore = object
    if (restore.health < 10) {
      restore.health = 10;
    }
    object = restore;
    return object;
}
//well this works

<img id="inn" onclick="rest()">
//not working in html

let innButton = document.getElementById("inn");
  innButton.onclick = rest();
//nope


<img id="inn" src= onclick="rest(hero)">
//nope

let inn = document.getElementById('inn');
  inn.onclick = funtion(){
    hero.health = 10;

//nope

//Use unshift. It's like push, except it adds elements to the beginning of the array instead of the end.

function equipWeapon(object){
  let newObject = object;
  let oldObject = this.weapon;
    this.inventory.unshift(oldObject);
    this.weapon = newObject
}
//nope

function equipWeapon(object){
  let newObject = object;
  let newWeapon = newObject.inventory[1];
  let oldWeapon = newObject.weapon;
    newObject.inventory.push(oldWeapon);
    newObject.weapon = newWeapon;
    object = newObject;
    return object;
}
//nope
//changed 1 to zero dumb mistake

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

//code works but form onsubmit causes the page to reload
//using document.write causes the page to reload too, need to think of solution

//this code controls movement on canvas
if(rightPress){
  heroX += 7;
}
else if(leftPress){
  heroX -= 7;
}

//this controls game over state
else if (x+ dx < canvas.width)
  alert("GAME OVER");
  document.location.reload();
}

//breaks the code

if(x + dx > canvas.width-50) {
  dx = -dx;
}
//this controls game over state
else if (x+ dx > canvas.width)
  alert("GAME OVER");
  document.location.reload();
}


//this code controls the game over state, when blackbox reaches the right side
} else if(x + dx > canvas.width-boxSize) {
    alert("GAME OVER");
    document.location.reload();
}
//working code but needs to be replaced

//something is wrong in the code here preventing the white box from colliding with blackbox
//this code controls the game over state, when blackbox reaches the right side

else if(x + dx > canvas.width-boxSize) {
    if(y > heroY && y < heroY + heroWidth) {
        dx = -dx;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}

//it should be the opposite of this code from mdn
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}

function checkBottom(){
  console.log(`bottom collision detection running`);
  if(bottomSlider.slideBlack[0]>=bottomSlider.slideWhite[0]&&bottomSlider.slideBlack[1]<=bottomSlider.slidWhite[1]){
    console.log('bottom sliders are colliding');
  }
}

//this collision detection is a mess

function checkBottom(){
  //console.log(`bottom collision detection running`);
  //console.log(villainBox.bottomRight[0]);
  if(heroBox.bottomRight[0]>villainBox.bottomLeft[0]&&heroBox.bottomLeft[0]<villainBox.bottomRight[0]){
    console.log("bottom slider triggered");
    colBottom = true;
  }
}

function checkLeft(){
  if(heroBox.bottomLeft[1]>villainBox.topLeft[1]&&heroBox.topLeft[1]<villainBox.bottomLeft[1]){
    colLeft = true;
    console.log('left slider triggered')
  }
}
//this is kinda working
