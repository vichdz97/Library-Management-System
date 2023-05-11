import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  recoverForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get emailControl(): FormControl {
    return this.recoverForm.get('email') as FormControl;
  }

  onSubmit() {
    if (this.recoverForm.valid) {
      console.log(this.recoverForm.value);
      this.recoverForm.reset();
    }
    else {
      this.recoverForm.markAllAsTouched();
    }
  }

}
