import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  genres: string[] = ['Action and Adventure', 'Drama', 'Fantasy Fiction', 
                      'Graphic Novel', 'Historical Fiction', 'Horror', 
                      'Mystery', 'Romance', 'Science Fiction', 'Thriller'];
  status: string[] = ['Available', 'Not Available', 'Damaged', 'Missing', 'Lost'];
  bookForm!: FormGroup;
  validMessage: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      numPages: new FormControl('', [Validators.required]),
      currentHolds: new FormControl('', [Validators.required]),
      bookStatus: new FormControl('', [Validators.required]),
      totalBooks: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required]),
      daysRemaining: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe(
        data => {
          this.validMessage = "Your book request has been submitted. Thank you!";
          this.bookForm.reset();
          this.router.navigateByUrl('/catalog');
        },
        err => { console.error(err) }
      );
    }
    else {
      this.validMessage = "Please fill out the form before submitting!"
    }
  }

}
