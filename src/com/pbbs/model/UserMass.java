package com.pbbs.model;
// default package

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * UserMass entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "usermass", catalog = "spring_data_jpa")
public class UserMass implements java.io.Serializable {

	// Fields

	private Integer id;
	private Modul modul;
	private User user;
	private String verify;
	private String verifyInfo;

	// Constructors

	/** default constructor */
	public UserMass() {
	}

	/** minimal constructor */
	public UserMass(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public UserMass(Integer id,Modul modul, User user, String verify,
			String verifyInfo) {
		this.id = id;
		this.modul = modul;
		this.user = user;
		this.verify = verify;
		this.verifyInfo = verifyInfo;
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
	@JoinColumn(name = "uid")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "verify", length = 1)
	public String getVerify() {
		return this.verify;
	}

	public void setVerify(String verify) {
		this.verify = verify;
	}

	@Column(name = "verifyInfo", length = 200)
	public String getVerifyInfo() {
		return this.verifyInfo;
	}

	public void setVerifyInfo(String verifyInfo) {
		this.verifyInfo = verifyInfo;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "mid")
	public Modul getModul() {
		return modul;
	}

	public void setModul(Modul modul) {
		this.modul = modul;
	}

}