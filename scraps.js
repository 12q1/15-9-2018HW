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
