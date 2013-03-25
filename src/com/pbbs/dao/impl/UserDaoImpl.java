package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.UserDao;
import com.pbbs.model.User;

@Repository
public class UserDaoImpl extends BaseDao<User> implements UserDao {
	
	@Autowired
	public UserDaoImpl( EntityManagerFactory emf) {
		super(User.class, emf.createEntityManager());
	}
	
}
