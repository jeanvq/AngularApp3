import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal, computed } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  favourite?: boolean;
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private booksSignal = signal<Book[]>([]);
  private selectedBookIdSignal = signal<number | null>(null);

  books = computed(() => this.booksSignal());
  selectedBook = computed(() => {
    const id = this.selectedBookIdSignal();
    return this.booksSignal().find(b => b.id === id) || null;
  });

  constructor(private http: HttpClient) {}

  loadBooks() {
    this.http.get<Book[]>('/api/books').subscribe(books => this.booksSignal.set(books));
  }

  selectBook(id: number) {
    this.selectedBookIdSignal.set(id);
  }


  addBook(book: Book) {
    // Por defecto, los nuevos libros no son favoritos
    const bookWithFav = { ...book, favourite: false };
    this.http.post<Book>('/api/books', bookWithFav).subscribe(newBook => {
      this.booksSignal.update(books => [...books, newBook]);
    });
  }

  toggleFavourite(id: number) {
    const book = this.booksSignal().find(b => b.id === id);
    if (book) {
      const updated = { ...book, favourite: !book.favourite };
      this.updateBook(updated);
    }
  }

  updateBook(book: Book) {
    this.http.put<Book>(`/api/books/${book.id}`, book).subscribe(updatedBook => {
      this.booksSignal.update(books => books.map(b => b.id === book.id ? updatedBook : b));
    });
  }

  deleteBook(id: number) {
    this.http.delete(`/api/books/${id}`).subscribe(() => {
      this.booksSignal.update(books => books.filter(b => b.id !== id));
    });
  }
}
