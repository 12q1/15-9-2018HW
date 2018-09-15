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
