var expect    = require("chai").expect;
var GetBookResource = require("../app/resources/GetBookResource");

describe("Get book", function () {

    describe("Testa visa en bok...", function () {
        it("...boken visas", function () {
            var result = GetBookResource(1);

            expect(result).to.equal("Function not implemented! :(");
        });

        it("...som inte finns", function () {
            var result = GetBookResource(undefined);

            expect(result).to.equal("Function not implemented! :(");
        });
    });
});
