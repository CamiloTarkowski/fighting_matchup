package com.matchup.fg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matchup.fg.modelo.Games;

@Repository
public interface GamesRepository extends JpaRepository<Games, Long> {

}
