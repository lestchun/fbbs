package com.pbbs.model;

import static javax.persistence.GenerationType.IDENTITY;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * User entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "user", catalog = "spring_data_jpa")
public class User implements java.io.Serializable {

	// Fields

	private Integer id;
	private String username;
	private String nickname;
	private String password;
	private String grade;
	private String type;
	private String status;
	private Date startTime;
	private Date regiestTime;
	private Set<UserMass> userMasses = new HashSet<UserMass>(0);
	private Set<Message> messages = new HashSet<Message>(0);
	private Set<Modul> moduls = new HashSet<Modul>(0);
	private Set<Mass> masses = new HashSet<Mass>(0);
	private Set<Bbs> bbses = new HashSet<Bbs>(0);
	private Long reply;
	// Constructors

	/** default constructor */
	public User() {
	}

	public User(Integer id) {
		super();
		this.id = id;
	}

	/** full constructor */
	public User(String username, String nickname, String password,
			String grade, String type, String status, Timestamp startTime,
			Timestamp regiestTime, Set<UserMass> userMasses,
			Set<Message> messages, Set<Modul> moduls, Set<Mass> masses) {
		this.username = username;
		this.nickname = nickname;
		this.password = password;
		this.grade = grade;
		this.type = type;
		this.status = status;
		this.startTime = startTime;
		this.regiestTime = regiestTime;
		this.userMasses = userMasses;
		this.messages = messages;
		this.moduls = moduls;
		this.masses = masses;
	}

	public User(String username, String nickname, String password,
			String grade, String type, String status) {
		super();
		this.username = username;
		this.nickname = nickname;
		this.password = password;
		this.grade = grade;
		this.type = type;
		this.status = status;
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

	@Column(name = "username", length = 100)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "nickname", length = 100)
	public String getNickname() {
		return this.nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	@Column(name = "password", length = 100)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "grade", length = 100)
	public String getGrade() {
		return this.grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	@Column(name = "type", length = 1)
	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(name = "status", length = 1)
	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	
//	public Timestamp getStartTime() {
//		return this.startTime;
//	}
//
//	public void setStartTime(Timestamp startTime) {
//		this.startTime = startTime;
//	}

	@Column(name = "regiestTime", length = 0)
	@Temporal(TemporalType.TIME)
	public Date getRegiestTime() {
		return this.regiestTime;
	}

	public void setRegiestTime(Date regiestTime) {
		this.regiestTime = regiestTime;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	public Set<UserMass> getUserMasses() {
		return this.userMasses;
	}

	public void setUserMasses(Set<UserMass> userMasses) {
		this.userMasses = userMasses;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	public Set<Message> getMessages() {
		return this.messages;
	}

	public void setMessages(Set<Message> messages) {
		this.messages = messages;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	public Set<Modul> getModuls() {
		return this.moduls;
	}

	public void setModuls(Set<Modul> moduls) {
		this.moduls = moduls;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	public Set<Mass> getMasses() {
		return this.masses;
	}

	public void setMasses(Set<Mass> masses) {
		this.masses = masses;
	}
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	public Set<Bbs> getBbses() {
		return bbses;
	}

	public void setBbses(Set<Bbs> bbses) {
		this.bbses = bbses;
	}
	@Transient
	public Long getReply() {
		return reply;
	}

	public void setReply(Long reply) {
		this.reply = reply;
	}
	@Column(name = "startTime", length = 0)
	@Temporal(TemporalType.TIME) 
	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

}