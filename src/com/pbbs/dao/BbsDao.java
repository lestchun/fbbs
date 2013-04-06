package com.pbbs.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Bbs;

/**
 * Bbs接口
 * @author lei
 */
 @NoRepositoryBean
public interface BbsDao extends JpaRepository<Bbs,Integer>{
	 
	 public Page<Bbs> findBbsByModul(Integer modulId, Integer veify,Pageable page) ;
	 
	 public Page<Bbs> findBbsByUser(Bbs bbs,Pageable page) ;
	 
	 /*${start}${content}${end}*/
}