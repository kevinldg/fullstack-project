package org.example.backend;

import java.util.List;

import org.example.backend.model.Schedule;
import org.example.backend.repository.ScheduleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initializeDatabase(ScheduleRepository repository) {
        return args -> {
            List<Schedule> topics = List.of(
                    new Schedule("27.01.2025", "01-Welcome"),
                    new Schedule("27.01.2025", "02-Java-Basic"),
                    new Schedule("28.01.2025", "03-If-Else-Method"),
                    new Schedule("28.01.2025", "04-Git-Github-Part1"),
                    new Schedule("29.01.2025", "05-Array"),
                    new Schedule("29.01.2025", "06-Test"),
                    new Schedule("30.01.2025", "07-TDD"),
                    new Schedule("31.01.2025", "08-Shell"),
                    new Schedule("31.01.2025", "09-Maven-Continuous-Integration"),
                    new Schedule("03.02.2025", "10-Recap-Project"),
                    new Schedule("04.02.2025", "01-Class-and-Object"),
                    new Schedule("04.02.2025", "02-Package"),
                    new Schedule("05.02.2025", "03-Inheritance"),
                    new Schedule("05.02.2025", "04-static"),
                    new Schedule("06.02.2025", "05-Interface"),
                    new Schedule("07.02.2025", "06-List"),
                    new Schedule("07.02.2025", "07-Set-Map"),
                    new Schedule("10.02.2025", "08-Record-BigDecimal"),
                    new Schedule("10.02.2025", "09-Recap-Project"),
                    new Schedule("11.02.2025", "01-AI-aided-coding"),
                    new Schedule("12.02.2025", "02-Enum-Optional"),
                    new Schedule("12.02.2025", "03-Stream"),
                    new Schedule("13.02.2025", "04-Git-Github-Part2"),
                    new Schedule("14.02.2025", "05-Lombok"),
                    new Schedule("14.02.2025", "06-Exception"),
                    new Schedule("17.02.2025", "07-Date-and-Time"),
                    new Schedule("17.02.2025", "08-Recap-Project"),
                    new Schedule("18.02.2025", "01-HTTP-JSON"),
                    new Schedule("19.02.2025", "02-Spring-Web"),
                    new Schedule("19.02.2025", "03-MongoDB"),
                    new Schedule("20.02.2025", "04-Spring-Data"),
                    new Schedule("21.02.2025", "05-Spring-Service"),
                    new Schedule("21.02.2025", "06-Mocking"),
                    new Schedule("24.02.2025", "07-Integrationtest"),
                    new Schedule("24.02.2025", "12-Recap-Project"),
                    new Schedule("25.02.2025", "08-WebClient"),
                    new Schedule("25.02.2025", "09-MockWebServer"),
                    new Schedule("26.02.2025", "10-RestControllerAdvice"),
                    new Schedule("26.02.2025", "11-ChatGPT-API"),
                    new Schedule("27.02.2025", "12-Recap-Project"),
                    new Schedule("28.02.2025", "01-HTML"),
                    new Schedule("03.03.2025", "02-CSS-Layout"),
                    new Schedule("03.03.2025", "03-TypeScript-Basic"),
                    new Schedule("04.03.2025", "04-TypeScript-Function"),
                    new Schedule("04.03.2025", "05-TypeScript-Type"),
                    new Schedule("05.03.2025", "06-React-Project"),
                    new Schedule("05.03.2025", "07-React-Props"),
                    new Schedule("06.03.2025", "08-React-State"),
                    new Schedule("07.03.2025", "09-React-Router"),
                    new Schedule("07.03.2025", "10-React-Form"),
                    new Schedule("10.03.2025", "11-Axios"),
                    new Schedule("10.03.2025", "12-Recap-Project"),
                    new Schedule("11.03.2025", "02-Fullstack-Project"),
                    new Schedule("12.03.2025", "Start Teamproject"),
                    new Schedule("12.03.2025", "03-Clean-Code-Sonarcloud"),
                    new Schedule("13.03.2025", "Teamproject"),
                    new Schedule("14.03.2025", "04-Docker"),
                    new Schedule("14.03.2025", "Teamproject"),
                    new Schedule("17.03.2025", "05-Dockerfile-Dockerhub"),
                    new Schedule("17.03.2025", "Teamproject"),
                    new Schedule("18.03.2025", "06-CD-to-Cloud"),
                    new Schedule("18.03.2025", "Teamproject"),
                    new Schedule("19.03.2025", "01-SecurityConfig-OAuth"),
                    new Schedule("19.03.2025", "Teamproject"),
                    new Schedule("21.03.2025", "02-Security-Integration"),
                    new Schedule("21.03.2025", "Teamproject"),
                    new Schedule("24.03.2025", "03-Custom-User-Model"),
                    new Schedule("24.03.2025", "Teamproject"),
                    new Schedule("25.03.2025", "Capstone"),
                    new Schedule("26.03.2025", "Capstone"),
                    new Schedule("27.03.2025", "Capstone"),
                    new Schedule("28.03.2025", "Capstone"),
                    new Schedule("31.03.2025", "Capstone"),
                    new Schedule("01.04.2025", "Capstone"),
                    new Schedule("02.04.2025", "Capstone"),
                    new Schedule("03.04.2025", "Capstone"),
                    new Schedule("04.04.2025", "Capstone"),
                    new Schedule("07.04.2025", "Capstone"),
                    new Schedule("08.04.2025", "Capstone"),
                    new Schedule("09.04.2025", "Capstone"),
                    new Schedule("10.04.2025", "Capstone"),
                    new Schedule("11.04.2025", "Capstone"),
                    new Schedule("14.04.2025", "Capstone"),
                    new Schedule("15.04.2025", "Capstone"),
                    new Schedule("16.04.2025", "Capstone"),
                    new Schedule("17.04.2025", "Capstone"),
                    new Schedule("22.04.2025", "Capstone"),
                    new Schedule("23.04.2025", "Capstone")
            );

            for (Schedule schedule : topics) {
                if (!repository.existsByDateAndTopic(schedule.date(), schedule.topic())) {
                    repository.save(schedule);
                    System.out.println("[Info] Gespeichert: " + schedule);
                } else {
                    System.out.println("[!] Existiert bereits: " + schedule.topic());
                }
            }
        };
    }
}
