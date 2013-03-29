package com.pbbs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Modul entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "modul", catalog = "spring_data_jpa")
public class Modul implements java.io.Serializable {

	// Fields

	private Integer id;
	private Mass mass;
	private User user;
	private Visiablely visiablely;
	private String name;

	// Constructors

	/** default constructor */
	public Modul() {
	}

	/** full constructor */
	public Modul(Mass mass, User user, Visiablely visiablely, String name) {
		this.mass = mass;
		this.user = user;
		this.visiablely = visiablely;
		this.name = name;
	}

	// Property accessors
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "mid")
	public Mass getMass() {
		return this.mass;
	}

	public void setMass(Mass mass) {
		this.mass = mass;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pid")
	public Visiablely getVisiablely() {
		return this.visiablely;
	}

	public void setVisiablely(Visiablely visiablely) {
		this.visiablely = visiablely;
	}

	@Column(name = "name", length = 300)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}