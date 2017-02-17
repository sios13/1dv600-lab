(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {
        LibraryDAO.readXMLFile(function(books) {
            console.log(books.length);
            books.pop();
            console.log(books.length);
            LibraryDAO.writeXMLFile(books);
        });

        console.log(id);
    };

}());
