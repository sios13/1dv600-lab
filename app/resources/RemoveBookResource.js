(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, callback) {
        LibraryDAO.readXMLFile(function(error, books) {
            /**
             * Error handling
             */
            if (error) {
                return console.log(error);
            }

            /**
             * Find the book we want to remove
             * Remove the book from the books array using splice
             */
            books = books.catalog.book;

            let removeIndex = -1;

            books.forEach((book, index) => {
                if (book["$"].id === id) {
                    removeIndex = index;
                }
            });

            if (removeIndex === -1) {
                return console.log("ERROR: Can not remove book with id:" + id + ". Book not found.");
            }

            books.splice(removeIndex, 1);

            /**
             * Create a new array and set the books at index 'book'
             * This is to make sure the xml is formatted correctly
             */
            let newBooks = [];

            newBooks["book"] = books.slice();

            /**
             * Save the books to books.xml
             */
            LibraryDAO.writeXMLFile(newBooks, function(error) {
                if (error) {
                    return console.log(error);
                }

                console.log("Removed a book! :(");
            });

            callback(newBooks);
        });
    };

}());
