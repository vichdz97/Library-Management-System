import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser?: User;
  
  searchItem = '';
  resultMessage = '';
  books: any;
  titles: any;
  authors: any;
  // genres: any;
  isbns: any;
  publishers: any;
  matchingBooks: any;

  images = [
    { path: '/assets/nature1.jpg' },
    { path: '/assets/nature2.jpg' },
    { path: '/assets/nature3.jpg' },
    { path: '/assets/nature4.jpg' },
    { path: '/assets/nature5.jpg' },
    { path: '/assets/nature6.jpg' },
    { path: '/assets/nature7.jpg' },
    { path: '/assets/nature8.jpg' },
    { path: '/assets/nature9.jpg' },
    { path: '/assets/nature10.jpg' },
  ];

  constructor(
    private bookService: BookService,
    private userService: UserService
  ) { }
  
  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }
  
  showItem(item: string) {
    this.searchItem = item.toLowerCase().trim();
    this.resultMessage = `Showing results for: "${item}"`;
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe(
      data => { 
        this.books = data; 
        this.displaySearchResults();
      },
      err => console.error(err),
      () => console.log('books loaded')
    );
  }

  displaySearchResults() {
    if (this.searchItem != '') {
      this.titles = this.books.filter((book: any) => book.title.toLowerCase().includes(this.searchItem));
      this.authors = this.books.filter((book: any) => book.authors.toLowerCase().includes(this.searchItem));
      // this.genres = this.books.filter((book: any) => book.genre.toLowerCase().includes(this.searchItem));
      this.isbns = this.books.filter((book: any) => book.isbn.toString().includes(this.searchItem));
      this.publishers = this.books.filter((book: any) => book.publisher.toLowerCase().includes(this.searchItem));

      // this.matchingBooks = [...this.titles, ...this.authors, ...this.genres, ...this.isbns];
      this.matchingBooks = [...this.titles, ...this.authors, ...this.isbns, ...this.publishers];

      this.matchingBooks = [...new Set(this.matchingBooks)];

      console.log(this.matchingBooks);

      if (this.matchingBooks.length === 0) {
        this.matchingBooks = null;
      }
    }
    else {
      this.matchingBooks = null;
    }
  }
    
  backHome() {
    this.resultMessage = '';
  }

}
