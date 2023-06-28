import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookformComponent } from './pages/bookform/bookform.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { UserService } from './services/user.service';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BookformComponent,
    CatalogComponent,
    HomeComponent,
    LoginComponent,
    RecoverComponent,
    ErrorComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
