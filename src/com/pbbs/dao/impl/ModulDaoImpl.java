package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.ModulDao;
import com.pbbs.model.Modul;

@Repository
public class ModulDaoImpl extends BaseDao<Modul> implements ModulDao {
	
	@Autowired
	public ModulDaoImpl( EntityManagerFactory emf) {
		super(Modul.class, emf.createEntityManager());
	}
	
}
