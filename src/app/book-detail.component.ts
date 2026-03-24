import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'book-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (book()) {
      <h2>{{ book()?.title }}</h2>
      <p><strong>Author:</strong> {{ book()?.author }}</p>
      <p>{{ book()?.description }}</p>
      <a [routerLink]="['/books', book()?.id, 'update']">Edit</a>
      <a [routerLink]="['/books', book()?.id, 'delete']">Delete</a>
      <a routerLink="/books">Back to list</a>
    }
    @else {
      <p>Loading book...</p>
    }
  `
})
export class BookDetailComponent implements OnInit {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  book = computed(() => this.bookService.selectedBook());

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.selectBook(id);
    if (!this.bookService.books().length) {
      this.bookService.loadBooks();
    }
  }
}
