import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDatailsService } from 'src/app/book-datails.service';
import { BookContent, BookDetails } from 'src/app/types';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookInfo?: BookContent;
  @Input() bookI!: BookDetails;

  constructor(
    private route: ActivatedRoute,
    private bookDetails: BookDatailsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('bookId')!;

      this.bookDetails.getBookKey(id).subscribe((bookInfo) => {
        this.bookInfo = bookInfo;
      });
    });
  }
}
