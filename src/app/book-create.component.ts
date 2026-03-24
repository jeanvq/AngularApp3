import { Component, inject } from '@angular/core';
import { BookService, Book } from './book.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'book-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <h2>Add Book</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Title: <input formControlName="title"></label><br>
      <label>Author: <input formControlName="author"></label><br>
      <label>Description:<br>
        <textarea formControlName="description"></textarea>
      </label><br>
      <button type="submit">Add</button>
      <a routerLink="/books">Cancel</a>
    </form>
  `
})
export class BookCreateComponent {
  private bookService = inject(BookService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  form = this.fb.group({
    title: [''],
    author: [''],
    description: ['']
  });

  onSubmit() {
    const book: Book = this.form.value as Book;
    this.bookService.addBook(book);
    this.router.navigate(['/books']);
  }
}
