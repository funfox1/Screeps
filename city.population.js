var builderbody = [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE];
var harvesterbody = [WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE];
var harvesterbody2 = [WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE];
var upgraderbody = [WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
var bringerbody = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
var claimerbody = [CLAIM,MOVE];

var cityGestion = {
    /** @param {city} creep **/
    run: function(mySpawn) {


    //pour savoir le nombre de claimerLeft est ok
        var claimerLeft = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimerLeft');
    //pour avoir toujours 1 bringerUpgrade
        if(claimerLeft.length < 1) {
            if(mySpawn.canCreateCreep(claimerbody, undefined) == OK) {
                var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'claimerLeft', claimFocus: "E85N61"});
                console.log('Spawning new claimerLeft: ' + newName);
            }
        }



/*
      //pour savoir le nombre de bringerUpgrade est ok
          var bringerUpgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'bringerUpgrade2');
      //pour avoir toujours 1 bringerUpgrade
          if(bringerUpgrade.length < 1) {
              if(mySpawn.canCreateCreep(bringerbody, undefined) == OK) {
                  var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'bringerUpgrade2', containerfocus: "58d23dca10a73b554190e058", bringerfocus: "58d4ac2d367b25080bd2d3a0" });
                  console.log('Spawning new bringerUpgrade: ' + newName);
              }
          }
*/

    //pour savoir le nombre de bringerTower est ok
        var bringerTower = _.filter(Game.creeps, (creep) => creep.memory.role == 'bringerTower');
    //pour avoir toujours 1 bringerTower
        if(bringerTower.length < 1) {
            if(mySpawn.canCreateCreep(bringerbody, undefined) == OK) {
                var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'bringerTower', containerfocus: "58e070f6e0ec505daaee3bf5", bringerfocus: "58d683143b35f85d07235430", bringerfocus2: "58df6201ccea5b7943b311ce" });
                console.log('Spawning new bringerTower: ' + newName);
            }
        }




/*
    //pour savoir le nombre de bringerUpgrade est ok
            var bringerUpgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'bringerUpgrade');
    //pour avoir toujours 1 bringerUpgrade
            if(bringerUpgrade.length < 4) {
                if(mySpawn.canCreateCreep(bringerbody, undefined) == OK) {
                    var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'bringerUpgrade', containerfocus: "58d0ad205d70413b06afe814", bringerfocus: "58d4ac2d367b25080bd2d3a0" });
                    console.log('Spawning new bringerUpgrade: ' + newName);
                }
            }

*/





    //pour savoir le nombre d'upgrader
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    //pour avoir toujours 4 upgrader
        if(upgraders.length < 3) {
            if(mySpawn.canCreateCreep(upgraderbody, undefined) == OK) {
                var newName = mySpawn.createCreep(upgraderbody, undefined, {role: 'upgrader'});
                console.log('Spawning new upgrader: ' + newName);
            }
        }

    //pour savoir le nombre de builder
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var ConstructionSites = mySpawn.room.find(FIND_CONSTRUCTION_SITES);
    //pour avoir toujours 4 builder
        if(builders.length < 2 && ConstructionSites.length > 0) {
            if(mySpawn.canCreateCreep(builderbody, undefined) == OK) {
                var newName = mySpawn.createCreep(builderbody, undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }
        }

        //pour savoir le nombre de bringer2 est ok
            var bringer2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bringer2');
        //pour avoir toujours 1 bringer2
            if(bringer2.length < 1) {
                if(mySpawn.canCreateCreep(bringerbody, undefined) == OK) {
                    var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'bringer2', containerfocus: "58e19f7d533e143470ca0972"});
                    console.log('Spawning new bringer2: ' + newName);
                }
            }


        //pour savoir le nombre d'harvesters 1205
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_1205');
        //pour avoir toujours 1 harvester qui fournissent le barril 1205
            if(harvesters.length < 2) {
                if(mySpawn.canCreateCreep(harvesterbody, undefined) == OK) {
                    var newName = mySpawn.createCreep(harvesterbody, undefined, {role: 'harvester_1205', containerfocus: "58e19f7d533e143470ca0972", harvestfocus: "5873be6b11e3e4361b4dad86" });
                    console.log('Spawning new big harvester 1205: ' + newName);
                }
            }


        //pour savoir le nombre de bringer est ok
        var bringer = _.filter(Game.creeps, (creep) => creep.memory.role == 'bringer');
    //pour avoir toujours 1 bringer
        if(bringer.length < 1 || (bringer.length == 1 && bringer[0].body.length<5) ) {
            if(mySpawn.canCreateCreep(bringerbody, undefined) == OK) {
                var newName = mySpawn.createCreep(bringerbody, undefined, {role: 'bringer', containerfocus: "58e070f6e0ec505daaee3bf5" });
                console.log('Spawning new big bringer: ' + newName);
            }
            else{
                if (bringer.length < 1){
                    if(mySpawn.canCreateCreep([CARRY,CARRY,CARRY,MOVE], undefined) == OK) {
                    var newName = mySpawn.createCreep([CARRY,CARRY,CARRY,MOVE], undefined, {role: 'bringer', containerfocus: "58e070f6e0ec505daaee3bf5" });
                        console.log('Spawning new small bringer: ' + newName);
                    }
                }
            }
        }

        //pour savoir le nombre d'harvesters 4212
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_4212');
    //pour avoir toujours 2 harvesters qui fournissent le barril 4212
        if(harvesters.length < 2) {
            if(mySpawn.canCreateCreep([WORK,CARRY,MOVE], undefined) == OK && harvesters.length < 1) {
                var newName = mySpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester_4212', containerfocus: "58e070f6e0ec505daaee3bf5", harvestfocus: "5873be6b11e3e4361b4dad85" });
                console.log('Spawning new little harvester 4212: ' + newName);
            }
            else{
                if(mySpawn.canCreateCreep(harvesterbody, undefined) == OK) {
                    var newName = mySpawn.createCreep(harvesterbody, undefined, {role: 'harvester_4212', containerfocus: "58e070f6e0ec505daaee3bf5", harvestfocus: "5873be6b11e3e4361b4dad85" });
                    console.log('Spawning new big harvester 4212: ' + newName);
                }
            }
        }





















    }
};
module.exports = cityGestion;
