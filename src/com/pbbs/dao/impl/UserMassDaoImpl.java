package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.UserMassDao;
import com.pbbs.model.UserMass;

@Repository
public class UserMassDaoImpl extends BaseDao<UserMass> implements UserMassDao {
	
	@Autowired
	public UserMassDaoImpl( EntityManagerFactory emf) {
		super(UserMass.class, emf.createEntityManager());
	}
	
}
