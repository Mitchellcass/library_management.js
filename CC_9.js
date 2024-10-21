// Task 1: Create a book class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    }

// To get book details
    getDetails() {
        return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
    }
}

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        let count = 0;
        for (let book of this.books) {
            if (book.isAvailable) {
                count++; // When available, increase #
            }
        }
        return count; // Return the total # of available books
    }

    // Listing all books
    listBooks() {
        return this.books.map(book => `${book.getDetails()}, Available: ${book.isAvailable}`).join('\n');
    }
}


