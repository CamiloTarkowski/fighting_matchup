package com.matchup.fg.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matchup.fg.modelo.Games;
import com.matchup.fg.repository.GamesRepository;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
public class GamesController {

	@Autowired
	private GamesRepository repository;

	@GetMapping("/games")
	public List<Games> getAllGames() {
		return repository.findAll();
	}
	@GetMapping("/game/{id}")	
	public ResponseEntity<Games> getGameById(@PathVariable Long id){
        Optional<Games> optionalGames = repository.findById(id);
        
        if (optionalGames.isPresent()) {
        	Games games = optionalGames.get();
            return ResponseEntity.ok(games);
        } else {
            return ResponseEntity.notFound().build();
        }
	}

}
