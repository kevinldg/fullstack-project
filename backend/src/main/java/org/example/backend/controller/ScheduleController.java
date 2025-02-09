package org.example.backend.controller;

import org.example.backend.model.Schedule;
import org.example.backend.repository.ScheduleRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class ScheduleController {

    private final ScheduleRepository scheduleRepository;

    public ScheduleController(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @GetMapping("/schedule")
    public List<Schedule> schedule() {
        return scheduleRepository.findAll();
    }
}
