var srv = require('../src/server.js');

describe('server test', function() {

    it('simple string comparison', function() {
        expect(srv.hello("vasya")).toEqual("Hello vasya");
    });
});