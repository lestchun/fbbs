package com.pbbs.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Modul;
 

 

/**
 * Modul接口
 * @author lei
 */
 @NoRepositoryBean
public interface ModulDao extends JpaRepository<Modul,Integer>{
/*${start}${content}${end}*/
	 public Page<Modul> modulRank(String id, Pageable page) ;
	 public List<Modul> listModulByUser(Integer mass, Integer uid);
}
