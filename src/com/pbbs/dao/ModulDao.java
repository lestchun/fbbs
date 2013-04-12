package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.model.Modul;

/**
 * Modul接口
 * @author lei
 */
 @NoRepositoryBean
 @Transactional
public interface ModulDao extends JpaRepository<Modul,Integer>{
/*${start}${content}${end}*/
}