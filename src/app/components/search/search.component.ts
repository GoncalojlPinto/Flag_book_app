import { OnDestroy, OnInit, Component, Input } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { SubscriptionLike } from 'rxjs';
import { Book, BookResponse } from 'src/app/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchDone: boolean = false;
  author: string = '';
  books: Book[] = [];
  error: boolean = false;
  display = false;

  book!: BookResponse;

  private bookSubscription!: SubscriptionLike;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {}

  public searchBook(event?: any) {
    if (event) {
      if (event.keyCode === 13 && this.author !== '') {
        this.doSearchBook();
      }
    } else {
      this.doSearchBook();
    }
  }

  private doSearchBook() {
    this.error = false;
    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
    this.bookSubscription = this.bookService.searcher(this.author).subscribe(
      (data: BookResponse) => {
        this.books = data.docs as Book[];
        this.searchDone = true;
      },
      (error) => {
        this.error = true;
        throw error;
      }
    );
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

  onPress() {
    this.display = true;
  }
}
