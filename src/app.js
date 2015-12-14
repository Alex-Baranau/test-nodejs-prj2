var srv = require('./server');
var fs = require('fs');
var AWS = require('aws-sdk');

console.log( srv.hello("Anna") );

srv.async_calls([1,2,3,4,5,6,7], false, function(err, res) {
    console.log(res);
});

srv.async_calls([1,2,3,4], true, function(err, res) {
    console.log(res);
});

/*
var lambda = new AWS.Lambda({region: 'us-west-2'});
var params = {
    FunctionName: 'threeEvents',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: "{\"key1\":3, \"key2\":7, \"key3\":4}"
};
lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
*/

//process.stdin.pipe(process.stdout);

//var file = fs.createWriteStream('example.txt');
//file.write('hello, ');
//file.end('world!');

/*
fs.readFile('a.txt', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var arr = data.toString().split(',');
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    fs.writeFile('b.txt', sum, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Data was saved!");
    });
});
*/

/*
var rr = fs.createReadStream('a.txt');
rr.on('readable', function() {
    var chunk;
    while (null !== (chunk = rr.read()))
        console.log('readable:', chunk.toString().trim());
});
rr.on('end', function() {
    console.log('end');
});
*/
