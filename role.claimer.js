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

      if(creep.memory.dying && creep.ticksToLive > (CREEP_LIFE_TIME-100)) {
          creep.memory.dying = false;
          creep.say('back to work');
    }
    if(!creep.memory.dying && creep.ticksToLive < 150 ) {
        if (creep.body.length>4 && creep.hits==creep.hitsMax){
            creep.memory.dying = true;
            creep.say('regening');
        }
    }


      if(creep.memory.dying) {
          creep.moveTo(Game.spawns['Spawn1']);
      }
      else{

        if(creep.reserveController(creep.room.controller)== ERR_NOT_IN_RANGE){
          creep.moveTo(Game.flags[creep.memory.claimFocus]);
        }
      }
    }
};
module.exports = roleClaimer;
