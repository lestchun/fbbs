package com.pbbs.dao.impl;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.UserDao;
import com.pbbs.model.User;

@Repository()
public class UserDaoImpl extends BaseDao<User> implements UserDao {
	
	@Autowired
	public UserDaoImpl( EntityManagerFactory emf) {
		super(User.class, emf.createEntityManager());
	}

	public User findByUserIdAndUsername(User user) {
		List<User> list= findList("from User u where u.username=? and password=? ", new Object[]{user.getUsername(),user.getPassword()});
		if(null==list||0==list.size()){
			return null;
		}else{
			return list.get(0);
		}
	}
	
}
