package org.example.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "schedule")
public record Schedule(String date, String topic) {}
