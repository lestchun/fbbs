package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.MassDao;
import com.pbbs.model.Mass;

@Repository
public class MassDaoImpl extends BaseDao<Mass> implements MassDao {
	
	@Autowired
	public MassDaoImpl( EntityManagerFactory emf) {
		super(Mass.class, emf.createEntityManager());
	}
	
}
