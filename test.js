var crypto = require('crypto');
  
var sha1HashHex = crypto.createHash('sha1')
    .update('данннннннннные')
    .digest('hex');
 

console.log("sha1(hex): " + sha1HashHex);

 
