class Book {
    private currentPage: number = 1;

    constructor(private title: string, private author: string) {}

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    turnPage(): void {
        this.currentPage++;
    }

    getCurrentPage(): string {
        return `Page ${this.currentPage}`;
    }
}

class BookStorage {
    save(book: Book): void {
        console.log(`Saving: ${book.getTitle()} by ${book.getAuthor()}`);
    }
}

class Library {
    getLocation(book: Book): string {
        return "Shelf 5, Room 3";
    }
}

interface Printer {
    print(page: string): void;
}

class TextPrinter implements Printer {
    print(page: string): void {
        console.log(page);
    }
}

class WebPrinter implements Printer {
    print(page: string): void {
        console.log(`<div>${page}</div>`);
    }
}

const book = new Book("Rich Dad Poor Dad", "Robert");
const printer = new TextPrinter();
const storage = new BookStorage();
const library = new Library();

printer.print(book.getCurrentPage());
storage.save(book);
console.log(library.getLocation(book));
