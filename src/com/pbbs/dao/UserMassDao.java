package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbbs.model.UserMass;

/**
 * UserMass接口
 * @author lei
 */
public interface UserMassDao extends JpaRepository<UserMass,Integer>{
}