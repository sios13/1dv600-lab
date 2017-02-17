"use strict";

function Book(id, title, author, genre, price, publishDate, description) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.publishDate = publishDate;
    this.description = description;
}

module.exports = Book;
