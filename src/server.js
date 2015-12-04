var async = require('async');

exports.hello = function(name) {
    return "Hello " + name;
};

exports.async_calls = function(items, doSortAfter, cb) {
    var res = [];
    async.each(items,
        function(item, callback){
            setTimeout(function() {
                res.push(item);
                callback(null);
            }, Math.random() * 2000
            );
        },
        function(err){
            if (err)
                return cb(err);
            if (doSortAfter) {
                res.sort(function(a, b){
                    return a - b;
                });
            }
            cb(null, res);
        }
    );
}
