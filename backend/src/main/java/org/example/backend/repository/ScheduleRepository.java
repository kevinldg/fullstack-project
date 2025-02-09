package org.example.backend.repository;

import org.example.backend.model.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, String> {
    boolean existsByDateAndTopic(String date, String topic);
}
