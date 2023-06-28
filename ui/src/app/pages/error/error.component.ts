import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  currentUser?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }

}
