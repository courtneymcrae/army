
var army = {
    rank: ["private", "sergeant", "lieutenant", "captain", "general"],
    soldiers:[],
    general: null,
    promoteSolider: function () {

    }
}

var Soldier = function (name, number, rank) {
  this.name = name;
  this.number = number;
  this.rank = rank || "private";
}

buildSoldier: function () {
    for (var 1 =0; i<25; i++) {
}

Soldier.prototype.battleCry = function(){
  console.log("FREEDOM!");
}

Soldier.prototype.fight = function() {
}
var Army = {
   ranks : ["private", "sergeant", "sergeant", "sergeant", "sergeant", "lieutenant", "captain", "general"],
   soldiers : [],
   promoteSoldier: function  () {
       for (var i=0 ; i<25 ; i++) {
           Army.soldiers.push
       }
   } ,
   buildSoldier: function ()   {
       for (var i =0 ; i<25 ; i++){
    Army.soldiers.push( new Soldier("mr. bob"+[i], i, Army.ranks[i]) )
}