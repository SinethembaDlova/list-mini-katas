'use strict'
module.exports = function(list) {
    var first = list[0];
    var second = list[1];

    list[0] = second;
    list[1] = first;
    return list;
}
