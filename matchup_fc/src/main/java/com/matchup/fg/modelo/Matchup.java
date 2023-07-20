package com.matchup.fg.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "matchup")

public class Matchup {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column (name = "title", length = 100, nullable = false)
	private String title;
	
	@Column (name = "description", length = 500, nullable = false)
	private String description;
	
	@Column (name = "gif_url", length = 255, nullable = false)
	private String gif_url;
	
	@Column (name = "id_adv_for1", nullable = false)
	private boolean id_adv_for1;
	
	@Column (name = "id_character1", nullable = false, unique = true)
	private Long idCharacter1;
	
	@Column (name = "id_character2", nullable = false, unique = true)
	private Long idCharacter2;
	
	public Matchup() {
		
	}

	public Matchup(Long id, String title, String description, String gif_url, boolean id_adv_for1, Long idCharacter1, Long idCharacter2) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.gif_url = gif_url;
		this.id_adv_for1 = id_adv_for1;
		this.idCharacter1 = idCharacter1;
		this.idCharacter2 = idCharacter2;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGif_url() {
		return gif_url;
	}

	public void setGif_url(String gif_url) {
		this.gif_url = gif_url;
	}

	public boolean isId_adv_for1() {
		return id_adv_for1;
	}

	public void setId_adv_for1(boolean id_adv_for1) {
		this.id_adv_for1 = id_adv_for1;
	}

	public Long getIdCharacter1() {
		return idCharacter1;
	}
	
	public Long getIdCharacter2() {
		return idCharacter2;
	}
	public void setIdCharacter1(Long idCharacter1) {
		this.idCharacter1 = idCharacter1;
	}
		
	public void setId_character2(Long idCharacter2) {
		this.idCharacter2 = idCharacter2;
	}
		
	
}
