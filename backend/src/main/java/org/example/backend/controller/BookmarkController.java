package org.example.backend.controller;

import org.springframework.web.bind.annotation.*;

import org.example.backend.model.Bookmark;
import org.example.backend.repository.BookmarkRepository;

import java.util.List;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {
    private final BookmarkRepository bookmarkRepository;

    public BookmarkController(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    @GetMapping
    public List<Bookmark> getAllBookmarks() { return bookmarkRepository.findAll(); }

    @PostMapping("/add")
    public Bookmark addBookmark(@RequestBody Bookmark bookmark) {
        return bookmarkRepository.save(bookmark);
    }
}
