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

// Task 5: Handle books borrowing and returning

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book
vipPatron.borrowBook(book1); // Should show that it's not available

// Return the book
regularPatron.returnBook(book1);

// List books and availability
console.log("Books in Fiction Section:");
console.log(fiction.listBooks());
console.log("Books in Science Section:");
console.log(science.listBooks());

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);

