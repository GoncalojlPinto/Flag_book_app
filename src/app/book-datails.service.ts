import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookResponse, BookContent, BookDetails } from './types';

const BACKEND_API = 'https://gnm-book-class.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class BookDatailsService {
  constructor(private http: HttpClient) {}

  getBookKey(id: string): Observable<BookContent> {
    return this.http.get<BookContent>(`${BACKEND_API}/books?id=${id}`).pipe(
      map((bookinformation) => {
        const book = this.bookInfo(bookinformation);

        return book;
      })
    );
  }

  private bookInfo(info: BookContent): BookContent {
    return {
      details: info.details,
    };
  }

  private extractKey(key: string): string {
    return key.slice(key.lastIndexOf('/') + 1);
  }
}
