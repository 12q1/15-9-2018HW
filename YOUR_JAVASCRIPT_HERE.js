const hero = {
  name : "Captain Obvious",
  heroic : true,
  inventory : [],
  health : 10,
  weapon : {
    type : "sarcasm",
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
}

function restoreHealth(){
    console.log("inn button has been clicked");
    hero.health = 10;
  }

function pickUpItem(){
}

function equipWeapon(){

}

// Write your JS here
