import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() user?: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.user = undefined;
    this.userService.currentUser = undefined;
    this.router.navigateByUrl('/login');
  }

}
