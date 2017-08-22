'use strict'
module.exports = function(list){

  for (var i = 0; i <list.length; i++) {
    var current = list[i];
    var next = list[i+1];

    if(list[i] > list[i+1]){
      list[i] = next;
      list[list.length - 1] = current
    }

  }
    return list;
}
