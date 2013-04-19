package com.pbbs.model;

import java.sql.Timestamp;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * Bbs entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "bbs", catalog = "spring_data_jpa")
public class Bbs implements java.io.Serializable {

	// Fields

	private Integer id;
	private Modul modul;
	private Visiablely visiablely;
	private String title;
	private String content;
	private Integer viewNum;
	private Integer replayNum;
	private Date postTime;
	private Date updateTime;
	private String veify;
	private String veifyadvice;
	private Integer status;
	private User user;
	private Set<Reply> replys;
	// Constructors

	/** default constructor */
	public Bbs() {
	}

	/** minimal constructor */
	public Bbs(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public Bbs(Integer id, Modul modul, Visiablely visiablely, String title,
			String content, Integer viewNum, Timestamp postTime,
			Timestamp updateTime, String veify, String veifyadvice,
			Integer status) {
		this.id = id;
		this.modul = modul;
		this.visiablely = visiablely;
		this.title = title;
		this.content = content;
		this.viewNum = viewNum;
		this.postTime = postTime;
		this.updateTime = updateTime;
		this.veify = veify;
		this.veifyadvice = veifyadvice;
		this.status = status;
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




	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pid")
	public Visiablely getVisiablely() {
		return this.visiablely;
	}

	public void setVisiablely(Visiablely visiablely) {
		this.visiablely = visiablely;
	}

	@Column(name = "title", length = 500)
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "content")
	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Column(name = "viewNum")
	public Integer getViewNum() {
		return this.viewNum;
	}

	public void setViewNum(Integer viewNum) {
		this.viewNum = viewNum;
	}

	@Column(name = "postTime", length = 0)
	@Temporal(TemporalType.TIME)
	public Date getPostTime() {
		return this.postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	@Column(name = "updateTime", length = 0)
	@Temporal(TemporalType.TIME)
	public Date getUpdateTime() {
		return this.updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	@Column(name = "veify", length = 1)
	public String getVeify() {
		return this.veify;
	}

	public void setVeify(String veify) {
		this.veify = veify;
	}

	@Column(name = "veifyadvice", length = 1000)
	public String getVeifyadvice() {
		return this.veifyadvice;
	}

	public void setVeifyadvice(String veifyadvice) {
		this.veifyadvice = veifyadvice;
	}

	@Column(name = "status")
	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "mid")
	public Modul getModul() {
		return modul;
	}

	public void setModul(Modul modul) {
		this.modul = modul;
	}
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getReplayNum() {
		return replayNum;
	}

	public void setReplayNum(Integer replayNum) {
		this.replayNum = replayNum;
	}
	@Transient
	public String getSubCon(){
		return null==content?"":(content.length()>60?content.substring(0, 60):content);
	}
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "bbs")
	public Set<Reply> getReplys() {
		return replys;
	}

	public void setReplys(Set<Reply> replys) {
		this.replys = replys;
	}
}
