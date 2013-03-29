package com.pbbs.model;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Message entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "message", catalog = "spring_data_jpa")
public class Message implements java.io.Serializable {

	// Fields

	private Integer id;
	private User user;
	private Timestamp sendTime;
	private String msg;
	private String revicesUser;

	// Constructors

	/** default constructor */
	public Message() {
	}

	/** minimal constructor */
	public Message(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public Message(Integer id, User user, Timestamp sendTime, String msg,
			String revicesUser) {
		this.id = id;
		this.user = user;
		this.sendTime = sendTime;
		this.msg = msg;
		this.revicesUser = revicesUser;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sendUser")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "sendTime", length = 0)
	public Timestamp getSendTime() {
		return this.sendTime;
	}

	public void setSendTime(Timestamp sendTime) {
		this.sendTime = sendTime;
	}

	@Column(name = "msg", length = 65535)
	public String getMsg() {
		return this.msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Column(name = "revicesUser", length = 65535)
	public String getRevicesUser() {
		return this.revicesUser;
	}

	public void setRevicesUser(String revicesUser) {
		this.revicesUser = revicesUser;
	}

}