package com.matchup.fg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matchup.fg.modelo.Character;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long>{
	
	List<Character> findAllByGameId(Long game_id);

}
