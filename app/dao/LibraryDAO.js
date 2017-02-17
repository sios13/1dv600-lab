(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            var parser = new xml2js.Parser();
            fs.readFile(__dirname + '/../../books.xml', function(err, data) {
                if (err) {
                    return console.log(error);
                }

                parser.parseString(data, function (err, books) {
                    if (err) {
                        return console.log(err);
                    }

                    callback(books.catalog.book);

                    console.log('Done');
                });
            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

            var builder = new xml2js.Builder({rootName: "catalog"});

            var xml = builder.buildObject(data);

            fs.writeFile(__dirname + '/../../books.xml', xml, function(err) {
                if (err) {
                    return console.log("err");
                }

                console.log("HEJ");
            });
        }
    };

    module.exports = LibraryDAO;
}());
