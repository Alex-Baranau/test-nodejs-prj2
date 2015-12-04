var srv = require('../src/server.js');

describe('server test', function() {

    it('simple string comparison', function() {
        expect(srv.hello("vasya")).toEqual("Hello vasya");
    });
});

describe('async timeout tests', function() {

    it('expect sorted', function(done) {
        srv.async_calls([1,2,3,4,5], true, function(err, res) {
            expect(res).toEqual([1,2,3,4,5]);
            done();
        });
    });

    it('expect (probabilistically) not sorted', function(done) {
        srv.async_calls([1,2,3,4,5,6,7,8], false, function(err, res) {
            console.log(res);
            expect(res).not.toEqual([1,2,3,4,5,6,7,8]);
            res.sort(function(a, b){
                return a - b;
            });
            expect(res).toEqual([1,2,3,4,5,6,7,8]);
            done();
        });
    });
});