import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = '/server/api/books'

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get(this.url);
  }

  getBook(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  
  createBook(book: any) {
    let body = JSON.stringify(book);
    return this.http.post(this.url, body, httpOptions);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
