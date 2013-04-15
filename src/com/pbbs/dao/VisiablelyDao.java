package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Visiablely;
 

/**
 * Visiablely接口
 * @author li
 */
 @NoRepositoryBean
public interface VisiablelyDao extends JpaRepository<Visiablely,Integer>{
/*${start}${content}${end}*/
}
