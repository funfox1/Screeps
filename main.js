var towerid = "58d683143b35f85d07235430";
var containersid = ["584dc9dffe443f830afe165e","584ddc15eefac70220eed4d5"];
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleBringer = require('role.bringer');
var roleClaimer = require('role.claimer');
var cityPopulation = require('city.population');



module.exports.loop = function () {
cityPopulation.run(Game.spawns['Spawn1']);

/*si je veux jouer sur le temps*/
/*    var now=Game.time;
    console.log(now);*/


/* nettoyage des mémoires des creeps morts*/
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

/*regen*/
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.dying){
           Game.spawns['Spawn1'].renewCreep(creep);
        }
    }

/*pour connaitre l'energie dispo*/
/*  for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }*/
//gestion de la tourelle
    var tower = Game.getObjectById(towerid);
    if(tower) {
/*attaque des hostiles*/
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
        else{
/*heal des structures abimées*/
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {filter: (structure) => (structure.hits < structure.hitsMax && structure.hits < 250000 )});
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
        }
    }

/*gestion des creeps*/
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester_4212'||creep.memory.role == 'harvester_1205') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'bringer'||creep.memory.role == 'bringerTower'||creep.memory.role == 'bringerUpgrade'||creep.memory.role == 'bringerUpgrade2'||creep.memory.role == 'bringer2') {
            roleBringer.run(creep);
        }
        if(creep.memory.role == 'claimer') {
          //  roleClaimer.run(creep);
        }
    }
}
