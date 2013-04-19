package com.pbbs.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * reply entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "reply", catalog = "spring_data_jpa")
public class Reply implements java.io.Serializable {

	// Fields

	private Integer id;
	private Date regiestTime;
	private String content;
	private User user;
	private Bbs bbs;
	// Constructors

	/** default constructor */
	public Reply() {
	}

	/** minimal constructor */
	public Reply(Integer id) {
		this.id = id;
	}

	
	public Reply(Integer id, Timestamp regiestTime, String content, User user,
			Bbs bbs) {
		super();
		this.id = id;
		this.regiestTime = regiestTime;
		this.content = content;
		this.user = user;
		this.bbs = bbs;
	}

	// Property accessors
	@Id
	@Column(name = "id", unique = true, nullable = false)
	@GeneratedValue
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setContent(String content) {
		this.content = content;
	}


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@Column(name = "regiestTime", length = 0)
	@Temporal(TemporalType.TIME)
	public Date getRegiestTime() {
		return this.regiestTime;
	}

	public void setRegiestTime(Date regiestTime) {
		this.regiestTime = regiestTime;
	}
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "bid")
	public Bbs getBbs() {
		return bbs;
	}
	public void setBbs(Bbs bbs) {
		this.bbs = bbs;
	}
	public String getContent() {
		return content;
	}
}
