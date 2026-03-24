import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'books-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="d-flex align-items-center justify-content-between mb-2">
      <h2 class="mb-0">Book List</h2>
      <a class="btn btn-success px-4 py-2 fw-bold" style="font-size:1.1rem;" routerLink="/books/create">+ Add Book</a>
    </div>
    <div class="mb-4 d-flex gap-2 justify-content-end">
      <button class="btn btn-outline-warning" [class.active]="filter === 'all'" (click)="setFilter('all')">⭐ Todos</button>
      <button class="btn btn-warning text-dark" [class.active]="filter === 'favourites'" (click)="setFilter('favourites')">⭐ Favoritos</button>
    </div>
    <div class="books-list">
      @for (book of filteredBooks(); track book.id) {
        <div class="book-card flex-column flex-md-row align-items-md-center">
          <div class="d-flex align-items-center w-100">
            <button class="btn btn-link p-0 me-2" (click)="toggleFavourite(book.id)" [attr.aria-label]="book.favourite ? 'Unmark as favourite' : 'Mark as favourite'">
              <span [class]="(book.favourite ? 'text-warning' : 'text-secondary') + ' favourite-star'">
                {{ book.favourite ? '★' : '☆' }}
              </span>
            </button>
            <a class="book-title flex-grow-1" href="#" (click)="toggleDetails(book.id); $event.preventDefault();">{{ book.title }}</a>
            <div class="book-actions ms-auto">
              <a class="edit-btn" [routerLink]="['/books', book.id, 'update']">Edit</a>
              <a class="delete-btn" [routerLink]="['/books', book.id, 'delete']">Delete</a>
            </div>
          </div>
          @if (expandedBookId === book.id) {
            <div class="mt-3 w-100">
              <div class="book-author mb-2">by {{ book.author }}</div>
              <div class="mb-2">{{ book.description }}</div>
            </div>
          }
        </div>
      }
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-outline-info" (click)="reload()">Reload</button>
    </div>
  `
})
export class BooksListComponent implements OnInit {
  private bookService = inject(BookService);
  books = this.bookService.books;
  expandedBookId: number | null = null;
  filter: 'all' | 'favourites' = 'all';

  ngOnInit() {
    this.bookService.loadBooks();
  }

  reload() {
    this.bookService.loadBooks();
  }

  toggleFavourite(id: number) {
    this.bookService.toggleFavourite(id);
  }

  toggleDetails(id: number) {
    this.expandedBookId = this.expandedBookId === id ? null : id;
  }

  setFilter(f: 'all' | 'favourites') {
    this.filter = f;
  }

  filteredBooks() {
    const books = this.books();
    if (this.filter === 'favourites') {
      return books.filter(b => b.favourite);
    }
    return books;
  }
}
