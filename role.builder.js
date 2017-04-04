var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
            creep.memory.dying = false;
            creep.say('back to work');
	    }
	    if(!creep.memory.dying && creep.ticksToLive < 150 && creep.hits==creep.hitsMax) {
    	    creep.memory.dying = true;
	        creep.say('regening');
	    }


        if(creep.memory.dying) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
        else{
            if(creep.memory.building && creep.carry.energy == 0) {
                creep.memory.building = false;
                creep.say('harvesting');
	        }
	        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.building = true;
    	        creep.say('building');
	        }

	        if(creep.memory.building) {
    	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
                else{

                    if (creep.memory.repair!=null && creep.memory.repair.hits == creep.memory.repair.hitsMax){
                        creep.memory.repair = null;
                    }
                    if (creep.memory.repair==null){
                        closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {filter: (structure) => (structure.hits < .5*structure.hitsMax && structure.structureType != STRUCTURE_WALL)});



                      /*
                        if(!closestDamagedStructure.length) {
                            closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {filter: (structure) => (structure.hits < structure.hitsMax && structure.hits<250000)});
                        }

                        if(!closestDamagedStructure.length) {

                            closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {filter: (structure) => structure.hits < structure.hitsMax});
                        }*/

                        for (var countertStructure=0; countertStructure<closestDamagedStructure.length; countertStructure++ ){
                            var structureBeingRepaired = false;
                            for(var name in Memory.creeps) {
                                if(Game.creeps[name].memory.repair == closestDamagedStructure[countertStructure].id) {
                                    structureBeingRepaired = true;
                                }
                            }
                            if (!structureBeingRepaired) {
                                creep.memory.repair = closestDamagedStructure[countertStructure].id;
                                break;
                            }

                        }

                    }

                    if(creep.memory.repair!=null) {
                        var objRepair = Game.getObjectById(creep.memory.repair);
                        if(creep.repair(objRepair)== ERR_NOT_IN_RANGE){
                            creep.moveTo(objRepair);
                        }
                    }
                    else{
                        closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {filter: (structure) => (structure.hits < structure.hitsMax && structure.hits < 250000)});
                        if(creep.repair(closestDamagedStructure[0])== ERR_NOT_IN_RANGE){
                            creep.moveTo(closestDamagedStructure[0]);
                        }
                        else {
                            creep.moveTo(7,25);
                        }

                    }
                }
            }
	        else {
    	        var target = Game.getObjectById("58e070f6e0ec505daaee3bf5");
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

module.exports = roleBuilder;
