var sizeInfo = require('./db');

var getSize = function(size) {
    var size = size.toLowerCase();

    var result = null;

    for (key in sizeInfo) {
        if (size == key) {
          result = sizeInfo[key];
        } else if(!result) {
          result = 'Your data - "' + size + '" is not valid! Please try again...';
        }
    }
    console.log(result);

};

module.exports = getSize;

