package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbbs.model.Modul;

/**
 * Modul接口
 * @author lei
 */
public interface ModulDao extends JpaRepository<Modul,Integer>{
}