import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUsers!: User[];
  currentUser?: User;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    ) { }

    ngOnInit(): void {
      this.userService.getAllUsers().subscribe({
        next: data => this.allUsers = data,
        error: err => console.log(err),
        complete: () => console.log("SUCCESS - All users loaded")
      });
    }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.allUsers.forEach(user => {
        if (user.email === this.emailControl.value) {
          this.currentUser = user;
        }
      });

      this.userService.getUser(this.currentUser!.id).subscribe({
        next: res => {
          this.loginForm.reset();
        },
        error: err => console.error(err),
        complete: () => console.log("SUCCESS - User logged in")
      });
    } 
    else {
      this.loginForm.markAllAsTouched();
    }
  }

}
