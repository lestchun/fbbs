package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Mass;

/**
 * Mass接口
 * @author lei
 */
 @NoRepositoryBean
public interface MassDao extends JpaRepository<Mass,Integer>{
/*${start}${content}${end}*/
}