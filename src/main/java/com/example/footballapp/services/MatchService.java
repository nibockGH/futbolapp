package com.example.footballapp.services;

import com.example.footballapp.models.Match;
import com.example.footballapp.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {
    @Autowired
    private MatchRepository matchRepository;

    public Match save(Match match) {
        return matchRepository.save(match);
    }

    public List<Match> findAll() {
        return matchRepository.findAll();
    }
}
