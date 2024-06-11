package com.example.footballapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.footballapp")
public class FootballappApplication {

    public static void main(String[] args) {
        SpringApplication.run(FootballappApplication.class, args);
    }
}
