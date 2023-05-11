import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginResponseData } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  visual: LoginResponseData = {};

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    ) { }

    ngOnInit(): void {
      // this.loginService.getJSON().subscribe();
      // this.loginService.loginData.subscribe(users => {
      //   this.visual = users;
      // });
    }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  forgot() {
    this.router.navigateByUrl('/recover');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // this.loginService.addLogin(this.loginForm.value).subscribe(login => {
      //   console.log(login);
      //   this.loginForm.reset();
      //   this.router.navigateByUrl('/home');
      // });

      console.log(this.loginForm.value);
      this.loginForm.reset();
      this.router.navigateByUrl('/home');


    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
