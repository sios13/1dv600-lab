"use strict";

function Book(id, author, title, genre, price, publishDate, description) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.publishDate = publishDate;
    this.description = description;
}

module.exports = Book;
