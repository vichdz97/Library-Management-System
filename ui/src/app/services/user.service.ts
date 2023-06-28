import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser?: User;

  url = '/server/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
    .pipe(
      map(user => {
        this.currentUser = user;
        return this.currentUser;
      })
    );
  }

  createUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.post(this.url, body, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
