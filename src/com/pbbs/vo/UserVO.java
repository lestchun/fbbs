package com.pbbs.vo;

import static javax.persistence.GenerationType.IDENTITY;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "uservo", catalog = "spring_data_jpa" )
public class UserVO {
	private Integer id;
	private String username;
	private String nickname;
	private String password;
	private String grade;
	private String type;
	private String status;
	private Timestamp startTime;
	private Timestamp regiestTime;
	private Long reply;
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Timestamp getStartTime() {
		return startTime;
	}
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	public Timestamp getRegiestTime() {
		return regiestTime;
	}
	public void setRegiestTime(Timestamp regiestTime) {
		this.regiestTime = regiestTime;
	}
	public Long getReply() {
		return reply;
	}
	public void setReply(Long reply) {
		this.reply = reply;
	}
	
}
