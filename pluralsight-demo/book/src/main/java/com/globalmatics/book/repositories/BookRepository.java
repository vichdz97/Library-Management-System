package com.globalmatics.book.repositories;

import com.globalmatics.book.models.Book;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
