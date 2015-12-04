
describe('some sample tests', function() {

    it('simple arithm', function() {
        expect(2 + 3).toEqual(5);
    });

    it('simple regexp', function() {
        expect("170273").toMatch(/^[0-9]+$/);
    });

});