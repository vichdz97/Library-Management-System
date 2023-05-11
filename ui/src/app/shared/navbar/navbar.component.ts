import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginResponseData } from 'src/app/pages/login/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private subscription$: Subscription = new Subscription();
  loginStatus: LoginResponseData = {};

  constructor(
    private loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // this.getLoginData();
  }

  private getLoginData() {
    this.subscription$.add(
      this.loginService.loginData.subscribe(response => {
        this.loginStatus = response;
      })
    );
  }

  logout() {
    // this.loginService.loginData.next({});
    this.router.navigateByUrl('/login');
    console.warn('Successfully logged out!');
  }

}
