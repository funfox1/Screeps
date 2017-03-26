var roleBringer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
            creep.memory.dying = false;
            creep.say('back to work');
	    }
	    if(!creep.memory.dying && creep.ticksToLive < 150 ) {
	        if (creep.body.length>4){
    	        creep.memory.dying = true;
	            creep.say('regening');
	        }
	    }


        if(creep.memory.dying) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
        else{
            if(creep.memory.bringing && creep.carry.energy == 0) {
                creep.memory.bringing = false;
                creep.say('withdrawing');
	        }
	        if(!creep.memory.bringing && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.bringing = true;
	            creep.say('bringing');
	        }

	        if(creep.memory.bringing) {
	            if (creep.memory.bringerfocus){
	                 //&& Game.getObjectById(creep.memory.bringerfocus).energy<Game.getObjectById(creep.memory.bringerfocus.energyCapacity
	                target = Game.getObjectById(creep.memory.bringerfocus);
                  if target.energy == target.energyCapacity {
                    var targets = creep.room.find(FIND_STRUCTURES,
                      {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;} } );
                      if(targets.length > 0) {
                        target=targets[0];
                      }
                    }
	                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                    }


	            }
	            else
	            {
    	            var targets = creep.room.find(FIND_STRUCTURES,
                    {filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;} } );
                    if(targets.length > 0) {
                        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                        }
                    }
                    else {
                        creep.moveTo(16,16);
                    }
                }
	        }


	        else {
	            var target = Game.getObjectById(creep.memory.containerfocus);
                if (target != null){
                        if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
                else
    	        {
    	            creep.say('trouve pas');

    	        }
	        }
	    }
    }
};

module.exports = roleBringer;
