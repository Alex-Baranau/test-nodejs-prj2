var srv = require('./server');

console.log( srv.hello("Anna") );

srv.async_calls([1,2,3,4,5,6,7], false, function(err, res) {
    console.log(res);
});

srv.async_calls([1,2,3,4], true, function(err, res) {
    console.log(res);
});

