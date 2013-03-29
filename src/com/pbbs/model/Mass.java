package com.pbbs.model;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Mass entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "mass", catalog = "spring_data_jpa")
public class Mass implements java.io.Serializable {

	// Fields

	private Integer id;
	private User user;
	private String name;
	private String desc;
	private Integer num;
	private Set<Modul> moduls = new HashSet<Modul>(0);
	private Set<Bbs> bbses = new HashSet<Bbs>(0);
	private Set<UserMass> userMasses = new HashSet<UserMass>(0);

	// Constructors

	/** default constructor */
	public Mass() {
	}

	/** full constructor */
	public Mass(User user, String name, String desc, Integer num,
			Set<Modul> moduls, Set<Bbs> bbses, Set<UserMass> userMasses) {
		this.user = user;
		this.name = name;
		this.desc = desc;
		this.num = num;
		this.moduls = moduls;
		this.bbses = bbses;
		this.userMasses = userMasses;
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
	@JoinColumn(name = "uid")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "name", length = 100)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "desc", length = 65535)
	public String getDesc() {
		return this.desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Column(name = "num")
	public Integer getNum() {
		return this.num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "mass")
	public Set<Modul> getModuls() {
		return this.moduls;
	}

	public void setModuls(Set<Modul> moduls) {
		this.moduls = moduls;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "mass")
	public Set<Bbs> getBbses() {
		return this.bbses;
	}

	public void setBbses(Set<Bbs> bbses) {
		this.bbses = bbses;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "mass")
	public Set<UserMass> getUserMasses() {
		return this.userMasses;
	}

	public void setUserMasses(Set<UserMass> userMasses) {
		this.userMasses = userMasses;
	}

}