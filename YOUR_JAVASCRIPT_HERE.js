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
//I could probably handle the object better with less code but I'm not sure how and this is working.
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
// Write your JS here
