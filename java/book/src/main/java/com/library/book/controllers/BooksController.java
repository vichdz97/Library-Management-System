package com.library.book.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.library.book.models.Book;
import com.library.book.repositories.BookRepository;

@RestController
@RequestMapping("/api/books")
public class BooksController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> list() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Book get(@PathVariable("id") long id) {
        return bookRepository.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Book book) {
        bookRepository.save(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
        bookRepository.deleteById(id);
    }
}
