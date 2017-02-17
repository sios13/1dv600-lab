(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    let Book = require('../dao/books.js');

    let books = [
        new Book(
            0,
            "Harry Potter and the Philosopher's Stone",
            "J. K. Rowling",
            "Fantasy",
            "10",
            "1997",
            "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry."
        ),
        new Book(
            1,
            "Harry Potter and the Chamber of Secrets",
            "J. K. Rowling",
            "10",
            "1998",
            "Harry ignores warnings not to return to Hogwarts, only to find the school plagued by a series of mysterious attacks and a strange voice haunting him."
        ),
        new Book(
            2,
            "Harry Potter and the Prisoner of Azkaban",
            "J. K. Rowling",
            "10",
            "1999",
            "It's Harry's third year at Hogwarts; not only does he have a new 'Defense Against the Dark Arts' teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry."
        ),
        new Book(
            3,
            "Harry Potter and the Goblet of Fire",
            "J. K. Rowling",
            "10",
            "2000",
            "Harry finds himself mysteriously selected as an under-aged competitor in a dangerous tournament between three schools of magic"
        ),
        new Book(
            4,
            "Harry Potter and the Order of the Phoenix",
            "J. K. Rowling",
            "10",
            "2003",
            "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts."
        ),
        new Book(
            5,
            "Harry Potter and the Half-Blood Prince",
            "J. K. Rowling",
            "10",
            "2005",
            "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past."
        ),
        new Book(
            6,
            "Harry Potter and the Deathly Hallows",
            "J. K. Rowling",
            "10",
            "2007",
            "As Harry races against time and evil to destroy the Horcruxes, he uncovers the existence of three most powerful objects in the wizarding world: the Deathly Hallows."
        )
    ];

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        LibraryDAO.readXMLFile(function(books) {
            let books2 = [];

            for (let i = 0; i < books.length; i++) {
                let book = new Book(
                    books[i]["$"].id,
                    books[i].title,
                    books[i].author,
                    books[i].genre,
                    books[i].price,
                    books[i].publish_date,
                    books[i].description
                );

                books2.push(book);
            }

            callback(books2);
            //callback(JSON.stringify(book));
            //console.log(book[0]['$'].id);
        });
    };

}());
