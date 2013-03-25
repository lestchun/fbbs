package com.pbbs.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Visiablely entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "visiablely", catalog = "spring_data_jpa")
public class Visiablely implements java.io.Serializable {

	// Fields

	private Integer id;
	private String type;
	private Integer oid;
	private String sql;
	private String userIds;
	private Set<Modul> moduls = new HashSet<Modul>(0);
	private Set<Bbs> bbses = new HashSet<Bbs>(0);

	// Constructors

	/** default constructor */
	public Visiablely() {
	}

	/** minimal constructor */
	public Visiablely(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public Visiablely(Integer id, String type, Integer oid, String sql,
			String userIds, Set<Modul> moduls, Set<Bbs> bbses) {
		this.id = id;
		this.type = type;
		this.oid = oid;
		this.sql = sql;
		this.userIds = userIds;
		this.moduls = moduls;
		this.bbses = bbses;
	}

	// Property accessors
	@Id
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "type", length = 1)
	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(name = "oid")
	public Integer getOid() {
		return this.oid;
	}

	public void setOid(Integer oid) {
		this.oid = oid;
	}

	@Column(name = "sql", length = 1000)
	public String getSql() {
		return this.sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
	}

	@Column(name = "userIds", length = 65535)
	public String getUserIds() {
		return this.userIds;
	}

	public void setUserIds(String userIds) {
		this.userIds = userIds;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "visiablely")
	public Set<Modul> getModuls() {
		return this.moduls;
	}

	public void setModuls(Set<Modul> moduls) {
		this.moduls = moduls;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "visiablely")
	public Set<Bbs> getBbses() {
		return this.bbses;
	}

	public void setBbses(Set<Bbs> bbses) {
		this.bbses = bbses;
	}

}