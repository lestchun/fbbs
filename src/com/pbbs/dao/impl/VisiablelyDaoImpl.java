package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.VisiablelyDao;
import com.pbbs.model.Visiablely;

@Repository
public class VisiablelyDaoImpl extends BaseDao<Visiablely> implements VisiablelyDao {
	
	@Autowired
	public VisiablelyDaoImpl( EntityManagerFactory emf) {
		super(Visiablely.class, emf.createEntityManager());
	}
	
}
