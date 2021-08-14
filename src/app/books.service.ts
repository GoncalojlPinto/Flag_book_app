import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookResponse } from './types';

const BACKEND_BOOKS: string = 'https://gnm-book-class.herokuapp.com/books?id=';
const BACKED_SEARCH: string = 'https://gnm-book-class.herokuapp.com/search?';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBook(id: string): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${BACKEND_BOOKS}${id}`).pipe(
      map((rawBook) => {
        const book = this.toBook(rawBook);

        return book;
      })
    );
  }

  public searcher(title: string): Observable<any> {
    const id = new HttpParams().set('author', title);
    return this.http.get(`${BACKED_SEARCH}${id}&timeout=3000`);
  }

  private toBook(rawBook: BookResponse): BookResponse {
    return {
      numbFound: rawBook.numbFound,
      docs: rawBook.docs,
    };
  }
}
