(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (data, callback) {
        LibraryDAO.readXMLFile(function(error, books) {
            if (error) {
                return console.log(error);
            }

            books = books.catalog.book;

            data["$"] = {id: "" + (books.length + 1)};

            books.push(data);

            let newBooks = [];

            newBooks["book"] = books;

            LibraryDAO.writeXMLFile(newBooks, function(error) {
                if (error) {
                    return console.log(error);
                }

                console.log("Added a new book! :)");
            });

            callback(newBooks);
        });
    };

}());
