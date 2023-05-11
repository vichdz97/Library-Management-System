package com.library.book.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String authors;
    // private String genre;
    private long isbn;
	private int pageNumber;
    private String publicationDate;
    private String publisher;

    // private int currentHolds;
	// private String bookStatus;
	// private int totalBooks;

    // @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    // private Date dueDate;
	// private int daysRemaining;

    public Book(Long id, String title, String authors, long isbn, int pageNumber, String publicationDate, String publisher) {
        this.id = id;
        this.title = title;
		this.authors = authors;
		this.isbn = isbn;
		this.pageNumber = pageNumber;
        this.publicationDate = publicationDate;
        this.publisher = publisher;
    }
    
    // public Book(Long id, String title, String authors, String genre, long isbn, int pageNumber, Date publicationDate, String publisher,
    // int currentHolds, String bookStatus, int totalBooks, Date dueDate, int daysRemaining) {
    //     this.id = id;
    //     this.title = title;
	// 	this.authors = authors;
    //     this.genre = genre;
	// 	this.isbn = isbn;
	// 	this.pageNumber = pageNumber;
    //     this.publicationDate = publicationDate;
    //     this.publisher = publisher;
    //     this.currentHolds = currentHolds;
    //     this.bookStatus = bookStatus;
    //     this.totalBooks = totalBooks;
    //     this.dueDate = dueDate;
    //     this.daysRemaining = daysRemaining;
    // }

    public Book() {}
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getAuthors() {
        return authors;
    }
    
    public void setAuthors(String authors) {
        this.authors = authors;
    }
    
    // public String getGenre() {
    //     return genre;
    // }
    
    // public void setGenre(String genre) {
    //     this.genre = genre;
    // }
    
    public long getIsbn() {
        return isbn;
    }
    
    public void setIsbn(long isbn) {
        this.isbn = isbn;
    }
    
    public int getPageNumber() {
        return pageNumber;
    }
    
    public void setPageNumbers(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public String getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
    }
    
    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    // public int getCurrentHolds() {
    //     return currentHolds;
    // }
    
    // public void setCurrentHolds(int currentHolds) {
    //     this.currentHolds = currentHolds;
    // }
    
    // public String getBookStatus() {
    //     return bookStatus;
    // }
    
    // public void setBookStatus(String bookStatus) {
    //     this.bookStatus = bookStatus;
    // }
    
    // public int getTotalBooks() {
    //     return totalBooks;
    // }
    
    // public void setTotalBooks(int totalBooks) {
    //     this.totalBooks = totalBooks;
    // }
    
    // public Date getDueDate() {
    //     return dueDate;
    // }
    
    // public void setDueDates(Date dueDate) {
    //     this.dueDate = dueDate;
    // }
    
    // public int getDaysRemaining() {
    //     return daysRemaining;
    // }
    
    // public void setDaysRemaining(int daysRemaining) {
    //     this.daysRemaining = daysRemaining;
    // }
}
