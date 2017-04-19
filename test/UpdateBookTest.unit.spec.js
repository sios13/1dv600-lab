const expect = require("chai").expect;
const EditBookResource = require("../app/resources/EditBookResource");
const Book = require("../app/dao/books");

describe("Update book", function () {
    describe("Testa att uppdatera en bok...", function () {

        it("...med korrekt information", function () {
            var book = new Book(
                0,
                'JK Rowling',
                'Harry Potter',
                'Fantasy',
                '',
                '2000-01-01',
                'Harry Potter!'
            );

            var result = EditBookResource(book);

            expect(result).to.equal(true);
        });

        it('...med ofullständig information', function () {
            var book = new Book(undefined, undefined, undefined, undefined, undefined, undefined, undefined);

            var result = EditBookResource(book);

            expect(result).to.equal(false);
        });

    });
});
