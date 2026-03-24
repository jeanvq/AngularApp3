import { Routes } from '@angular/router';
import { BooksListComponent } from './books-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookUpdateComponent } from './book-update.component';
import { BookDeleteComponent } from './book-delete.component';
import { BookCreateComponent } from './book-create.component';

export const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/:id/update', component: BookUpdateComponent },
  { path: 'books/:id/delete', component: BookDeleteComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];
