package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.model.Visiablely;

/**
 * Visiablely接口
 * @author lei
 */
 @NoRepositoryBean
 @Transactional
public interface VisiablelyDao extends JpaRepository<Visiablely,Integer>{
/*${start}${content}${end}*/
}