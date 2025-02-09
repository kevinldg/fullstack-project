package org.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookmarks")
public record Bookmark(@Id String id, String name, String url, String favicon) {}
