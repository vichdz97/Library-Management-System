import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  public book: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.params.id);
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe(
      data => { this.book = data },
      err => console.error(err),
      () => console.log('book loaded')
    );
  }

}
