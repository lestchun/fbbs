package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Bbs;

/**
 * Bbs接口
 * @author lei
 */
 @NoRepositoryBean
public interface BbsDao extends JpaRepository<Bbs,Integer>{
/*${start}${content}${end}*/
}