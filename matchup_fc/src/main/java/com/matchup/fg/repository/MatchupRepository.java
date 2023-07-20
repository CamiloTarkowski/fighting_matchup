package com.matchup.fg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matchup.fg.modelo.Matchup;



@Repository
public interface MatchupRepository extends JpaRepository<Matchup, Long>{
	List<Matchup> findByidCharacter1AndIdCharacter2(Long idCharacter1, Long idCharacter2);

}
