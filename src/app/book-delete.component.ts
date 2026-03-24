import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'book-delete',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Delete Book</h2>
    @if (book()) {
      <p>Are you sure you want to delete <strong>{{ book()?.title }}</strong> by {{ book()?.author }}?</p>
      <button (click)="deleteBook()">Delete</button>
      <a routerLink="/books">Cancel</a>
    }
    @else {
      <p>Book not found.</p>
      <a routerLink="/books">Back</a>
    }
  `
})
export class BookDeleteComponent implements OnInit {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  book = this.bookService.selectedBook;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.selectBook(id);
  }

  deleteBook() {
    const book = this.book();
    if (book) {
      this.bookService.deleteBook(book.id);
      this.router.navigate(['/books']);
    }
  }
}
