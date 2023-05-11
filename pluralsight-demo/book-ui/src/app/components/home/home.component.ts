import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  genres: string[] = ['Fantasy Fiction', 'Historical Fiction', 'Science Fiction'];
  bookForm!: FormGroup;
  validMessage: string = "";

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.bookForm.valid) {
      this.validMessage = "Your book request has been submitted. Thank you!";
      this.bookService.createBook(this.bookForm.value).subscribe(
        data => {
          this.bookForm.reset();
          return true;
        },
        err => { console.error(err) }
      );
    }
    else {
      this.validMessage = "Please fill out the form before submitting!"
    }
  }

}
