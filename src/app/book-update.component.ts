import { Component, inject, OnInit } from '@angular/core';
import { BookService, Book } from './book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'book-update',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <h2>Actualizar Libro</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Título: <input formControlName="title"></label><br>
      <label>Autor: <input formControlName="author"></label><br>
      <label>Descripción:<br>
        <textarea formControlName="description"></textarea>
      </label><br>
      <button type="submit">Guardar</button>
      <a routerLink="/books">Cancelar</a>
    </form>
  `
})
export class BookUpdateComponent implements OnInit {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  form = this.fb.group({
    id: [0],
    title: [''],
    author: [''],
    description: ['']
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const book = this.bookService.books().find(b => b.id === id);
    if (book) {
      this.form.patchValue(book);
    }
  }

  onSubmit() {
    const book: Book = this.form.value as Book;
    this.bookService.updateBook(book);
    this.router.navigate(['/books', book.id]);
  }
}
