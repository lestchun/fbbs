package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.${sname}Dao;
import com.pbbs.model.${sname};

@Repository
public class ${sname}DaoImpl extends BaseDao<${sname}> implements ${sname}Dao {
	
	@Autowired
	public ${sname}DaoImpl( EntityManagerFactory emf) {
		super(${sname}.class, emf.createEntityManager());
	}
	
}
