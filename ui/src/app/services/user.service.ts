import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = '/server/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  createUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.post(this.url, body, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
