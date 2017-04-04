var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
            creep.memory.dying = false;
            creep.say('back to work');
	    }
	    if(!creep.memory.dying && creep.ticksToLive < 150 && creep.hits==creep.hitsMax) {
	        if (creep.body.length>3){
    	        creep.memory.dying = true;
	            creep.say('regening');
	        }
	    }

        if(creep.memory.dying) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
        else{
           if(!creep.memory.harvesting && creep.carry.energy == 0) {
                creep.memory.harvesting = true;
                creep.say('harvesting');
	        }
	        if(creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.harvesting = false;
	            creep.say('giving');
	        }


            if(creep.memory.harvesting) {
                /*
                var ressource = creep.room.find(FIND_DROPPED_RESOURCES);
                if (ressource[0]){
                   if(creep.pickup(ressource[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(ressource[0]);
                   }
                }
                else{
                */
                    var sources = Game.getObjectById(creep.memory.harvestfocus);
                    if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources);
                    }
                /*}*/
            }
            else {

                targets = Game.getObjectById(creep.memory.containerfocus);
                if (targets != null){
                        if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets);
                    }
                }
                else{



                    var targets = creep.room.find(FIND_STRUCTURES,
                    {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;} } );


                    if(targets.length > 0) {
                            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                        }
                    }
                }

            }
        }
    }
};

module.exports = roleHarvester;
