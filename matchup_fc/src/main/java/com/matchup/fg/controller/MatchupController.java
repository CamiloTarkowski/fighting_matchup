package com.matchup.fg.controller;

import java.util.List;


import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matchup.fg.modelo.Matchup;
import com.matchup.fg.repository.MatchupRepository;

@RestController
@RequestMapping("")
public class MatchupController {
    private final MatchupRepository matchupRepository;

    public MatchupController(MatchupRepository matchupRepository) {
        this.matchupRepository = matchupRepository;
    }

    @GetMapping("matchups/{idCharacter1}/{idCharacter2}")
    public ResponseEntity<List<Matchup>> getAllMatchupsByCharacterIds(@RequestParam("idCharacter1") Long idCharacter1,
                                                                      @RequestParam("idCharacter2") Long idCharacter2) {
        List<Matchup> matchups = matchupRepository.findByidCharacter1AndIdCharacter2(idCharacter1, idCharacter2);

        if (matchups.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(matchups);
        }
    }
}
