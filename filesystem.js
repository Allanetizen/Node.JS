// appending  FILE , IF NOT PRESENT it creates it
var fs = require('fs');
fs.appendFile('myappfile.txt',' Hello content!', function(err){
    if(err) throw err;
    console.log('saved');
});