var expect    = require("chai").expect;
var AddBookResource = require("../app/resources/AddBookResource");

const Book = require("../app/dao/books.js");

describe("Add book", function () {

    describe("Testa lägga till en bok...", function () {
        it("...som inte redan finns i systemet", function () {
            var book = new Book(
                0,
                "Harry Potter and the Philosopher's Stone",
                "J. K. Rowling",
                "Fantasy",
                "10",
                "1997",
                "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry."
            );

            var result = AddBookResource(book);

            var expected = "Function not implemented! :(";

            expect(result).to.equal(expected);
        });

        it("...med otillräcklig information", function () {
            var book = new Book(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            );

            var result = AddBookResource(book);

            var expected = "Function not implemented! :(";

            expect(result).to.equal(expected);
        });

        it("...som redan finns", function () {
            var book = new Book(
                0,
                "Foundation",
                "Isaac Asimov",
                "Science Ficition",
                "164",
                "1951-08-21",
                "Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."
            );

            var result = AddBookResource(book);

            var expected = "Function not implemented! :(";

            expect(result).to.equal(expected);
        });
    });
});
