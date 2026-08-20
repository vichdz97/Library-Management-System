package io.github.vichdz97.lms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.vichdz97.lms.models.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
