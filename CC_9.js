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

// Task 2: Create a section class
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

// Task 3: Create a patron class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];// This holds the borrowed books
    }

    // Borrow book function
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false; // If false, mark as borrowed
            this.borrowedBooks.push(book); // Add the book to borrowed list
            console.log(`${this.name} borrowed "${book.title}"`);
        } else {
            console.log(`Sorry, "${book.title}" is not available.`); // Shows the book as unavailable
        }
    }

    // Return book function
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index >= 0) {
            book.isAvailable = true; // This shows that the book is available
            this.borrowedBooks.splice(index, 1); // Remove book from borrowed list
            console.log(`${this.name} returned "${book.title}"`);
        } else {
            console.log(`${this.name} did not borrow "${book.title}".`);
        }
    }
}

// Task 4: Create a VIPPatron class that inherits from Patron
class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true;
    }

    borrowBook(book) {
        if (book.isAvailable) {
            super.borrowBook(book);
        } else {
            console.log(`VIP ${this.name} can't borrow "${book.title}" because it's not available.`);
        }
    }
}
