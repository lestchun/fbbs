package com.pbbs.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.model.Mass;

/**
 * Mass接口
 * @author lei
 */
 @NoRepositoryBean
 @Transactional
public interface MassDao extends JpaRepository<Mass,Integer>{
	 
	 public Page<Mass> listMass(Integer userId,Integer vify, Pageable page);
	 
	 
}