package com.pbbs.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.model.Bbs;

/**
 * Bbs接口
 * @author lei
 */
@NoRepositoryBean
@Transactional
public interface BbsDao extends JpaRepository<Bbs,Integer>{
	 
	 public Page<Bbs> findBbsByModul(Integer modulId, Integer veify,Pageable page) ;
	 
	 public Page<Bbs> findBbsByUser(Bbs bbs,Pageable page) ;
	 
}
