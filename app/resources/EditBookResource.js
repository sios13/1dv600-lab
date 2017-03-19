(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, data, callback) {
        LibraryDAO.readXMLFile(function(error, books) {
            if (error) {
                return console.log(error);
            }

            books = books.catalog.book;

            books[parseInt(id)-1] = data;

            let newBooks = [];

            newBooks["book"] = books;

            LibraryDAO.writeXMLFile(newBooks, function(error) {
                if (error) {
                    return console.log(error);
                }

                console.log("Edited a book! :)");
            });

            // callback(newBooks);
        });
    };

}());
