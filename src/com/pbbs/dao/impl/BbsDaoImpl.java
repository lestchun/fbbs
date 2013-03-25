package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.BbsDao;
import com.pbbs.model.Bbs;

@Repository
public class BbsDaoImpl extends BaseDao<Bbs> implements BbsDao {
	
	@Autowired
	public BbsDaoImpl( EntityManagerFactory emf) {
		super(Bbs.class, emf.createEntityManager());
	}
	
}
