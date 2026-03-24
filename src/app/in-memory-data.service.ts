import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book.service';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Book[] = [
      { id: 1, title: 'Clean Code', author: 'Robert C. Martin', description: 'A Handbook of Agile Software Craftsmanship.', favourite: false },
      { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', description: 'Your Journey to Mastery.', favourite: false },
      { id: 3, title: 'Angular Up & Running', author: 'Shyam Seshadri', description: 'Learning Angular step by step.', favourite: false }
    ];
    return { books };
  }
}
