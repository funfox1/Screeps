/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.claimer');
 * mod.thing == 'a thing'; // true
 */
var roleClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        /*
        if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
            creep.memory.dying = false;
            creep.say('back to work');
	    }
	    if(!creep.memory.dying && creep.ticksToLive < 150 ) {
	        if (creep.body.length>3){
    	        creep.memory.dying = true;
	            creep.say('regening');
	        }
	    }

        if(creep.memory.dying) {
            if (creep.room.name != Game.spawns['Spawn1'].room.name){
                creep.moveTo(creep.pos.findClosestByPath(creep.room.findExitTo(Game.spawns['Spawn1'].room.name)));
            }
            else{
                creep.moveTo(Game.spawns['Spawn1']);
            }

        }
        else{*/
            if (creep.room.name != creep.memory.claimFocus){
                creep.moveTo(Game.flags['funfoxClaim1']);
                creep.say("going from "+creep.room.name+" to "+creep.memory.claimFocus);
            }
            else{
                if(creep.reserveController(creep.memory.claimFocus)== ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.memory.claimFocus);
                }
            }
        }
    /*}*/
};
module.exports = roleClaimer;
