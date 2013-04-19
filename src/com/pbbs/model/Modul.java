package com.pbbs.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;

import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.struts2.json.annotations.JSON;

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
	private Set<UserMass> userMasses = new HashSet<UserMass>(0);
	private Set<Bbs> bbses = new HashSet<Bbs>(0);
	// Constructors

	/** default constructor */
	public Modul() {
	}
 

	public Modul(Integer id) {
		super();
		this.id = id;
	}


	public Modul(Integer id, Mass mass, User user, Visiablely visiablely,
			String name, Set<UserMass> userMasses, Set<Bbs> bbses) {
		super();
		this.id = id;
		this.mass = mass;
		this.user = user;
		this.visiablely = visiablely;
		this.name = name;
		this.userMasses = userMasses;
		this.bbses = bbses;
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
	@JSON(serialize=false)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "mid")
	public Mass getMass() {
		return this.mass;
	}

	public void setMass(Mass mass) {
		this.mass = mass;
	}
	@JSON(serialize=false)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@JSON(serialize=false)
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
	@JSON(serialize=false)
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "modul")
	public Set<UserMass> getUserMasses() {
		return this.userMasses;
	}

	public void setUserMasses(Set<UserMass> userMasses) {
		this.userMasses = userMasses;
	}
	@JSON(serialize=false)
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "modul")
	public Set<Bbs> getBbses() {
		return this.bbses;
	}

	public void setBbses(Set<Bbs> bbses) {
		this.bbses = bbses;
	}
}