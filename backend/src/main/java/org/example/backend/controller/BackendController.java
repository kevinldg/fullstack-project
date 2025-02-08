package org.example.backend.controller;

import org.example.backend.data.Schedule;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class BackendController {

    @GetMapping("/")
    public Map<String, String> helloWorld() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello World!");

        return response;
    }

    @GetMapping("/schedule")
    public Map<String, String> schedule() {
        Schedule schedule = new Schedule();
        return schedule.get();
    }
}
