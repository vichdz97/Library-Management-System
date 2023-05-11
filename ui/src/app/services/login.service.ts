import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login, LoginResponseData } from '../pages/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private api = "./assets/mocks/login/users.json";
  private api = "http://localhost:3000/data";
  loginData: BehaviorSubject<LoginResponseData> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getJSON(): Observable<LoginResponseData> {
    return this.http.get<LoginResponseData>(this.api)
      .pipe(map(response => {
        console.log(`response = ${response}`)
        // console.log(`response.data = ${response.data}`)

        this.loginData.next(response);
        return response;
      }));
  }

  addLogin(login: Login): Observable<LoginResponseData> {
    return this.http.post<LoginResponseData>(this.api, login)
      .pipe(map(response => {
        this.loginData.next(response);
        return response;
      }));
  }

  // isLoggedIn(): boolean {
  //   return !this.loginData.value.userEmail; // "!" fixes error
  // }
}
