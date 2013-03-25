package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbbs.model.Mass;

/**
 * Mass接口
 * @author lei
 */
public interface MassDao extends JpaRepository<Mass,Integer>{
}