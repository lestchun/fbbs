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
 * Bbs entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "bbs", catalog = "spring_data_jpa")
public class Bbs implements java.io.Serializable {

	// Fields

	private Integer id;
	private Mass mass;
	private Visiablely visiablely;
	private String title;
	private String content;
	private Integer viewNum;
	private Timestamp postTime;
	private Timestamp updateTime;
	private String veify;
	private String veifyadvice;
	private Integer status;

	// Constructors

	/** default constructor */
	public Bbs() {
	}

	/** minimal constructor */
	public Bbs(Integer id) {
		this.id = id;
	}

	/** full constructor */
	public Bbs(Integer id, Mass mass, Visiablely visiablely, String title,
			String content, Integer viewNum, Timestamp postTime,
			Timestamp updateTime, String veify, String veifyadvice,
			Integer status) {
		this.id = id;
		this.mass = mass;
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

	@Column(name = "content", length = 65535)
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
	public Timestamp getPostTime() {
		return this.postTime;
	}

	public void setPostTime(Timestamp postTime) {
		this.postTime = postTime;
	}

	@Column(name = "updateTime", length = 0)
	public Timestamp getUpdateTime() {
		return this.updateTime;
	}

	public void setUpdateTime(Timestamp updateTime) {
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

}