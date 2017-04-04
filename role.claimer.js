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
      if(creep.reserveController(creep.room.controller)== ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.flags[creep.memory.claimFocus]);
        }
      }
};
module.exports = roleClaimer;
