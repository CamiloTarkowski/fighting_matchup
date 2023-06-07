package com.matchup.fg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matchup.fg.modelo.Matchup;



@Repository
public interface MatchupRepository extends JpaRepository<Matchup, Long>{

}
