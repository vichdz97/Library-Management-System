import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  currentUser?: User;

  public books: any;
  public book: any;

  constructor(
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getBooks();
    // this.getOneBook(1);

    this.currentUser = this.userService.currentUser;
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe(
      data => { this.books = data },
      err => console.error(err),
      () => console.log('books loaded')
    );
  }

  // getOneBook(id: number) {
  //   this.bookService.getBook(id).subscribe(
  //     data => { this.book = data },
  //     err => console.error(err),
  //     () => console.log('book loaded')
  //   );
  // }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(
      data => { this.ngOnInit() },
      err => console.error(err),
      () => console.log('deleted book')
    );
  }

}
