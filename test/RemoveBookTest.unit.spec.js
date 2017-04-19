const expect    = require("chai").expect;
const RemoveBookResource = require("../app/resources/RemoveBookResource");

describe("Remove book", function () {
    describe("Tar bort en bok...", function () {

        it("...som finns i systemet", function () {
            var result = RemoveBookResource(0);

            expect(result).to.equal(true);
        });

        it("...som inte finns i systemet", function () {
            var result = RemoveBookResource(null);

            expect(result).to.equal(false);
        });

    });
});
