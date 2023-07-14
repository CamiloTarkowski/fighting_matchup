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

import com.matchup.fg.modelo.Character;
import com.matchup.fg.repository.CharacterRepository;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {
	
	@Autowired
	private CharacterRepository repository;
	
	
	@GetMapping("/characters/{gameId}")
    public List<Character> getCharactersByGameId(@PathVariable Long gameId) {
        List<Character> characters = repository.findAllByGameId(gameId);
        return characters;
    }
	
	@GetMapping("/character/{id}")	
	public ResponseEntity<Character> getCharacterById(@PathVariable Long id){
        Optional<Character> optionalCharacter = repository.findById(id); 
        
        if (optionalCharacter.isPresent()) {
        	Character character = optionalCharacter.get();
            return ResponseEntity.ok(character);
        } else {
            return ResponseEntity.notFound().build();
        }
	}
}
