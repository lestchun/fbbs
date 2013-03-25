package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbbs.model.Bbs;

/**
 * Bbs接口
 * @author lei
 */
public interface BbsDao extends JpaRepository<Bbs,Integer>{
}