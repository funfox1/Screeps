var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
            creep.memory.dying = false;
            creep.say('back to work');
	    }
	    if(!creep.memory.dying && creep.ticksToLive < 150 ) {
    	    creep.memory.dying = true;
	        creep.say('regening');
	    }

        if(creep.memory.dying) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
        else{
            if(creep.memory.upgrading && creep.carry.energy == 0) {
                creep.memory.upgrading = false;
                creep.say('harvesting');
	        }
	        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.upgrading = true;
	            creep.say('upgrading');
	        }


	        if(creep.memory.upgrading) {
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
            }
            else {
                var target = Game.getObjectById("58d4ac2d367b25080bd2d3a0");
                if (target != null){
                        if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
                else{
                    var targets = creep.room.find(FIND_STRUCTURES,
                    {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION ) && structure.energy == structure.energyCapacity;} } );
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

module.exports = roleUpgrader;
