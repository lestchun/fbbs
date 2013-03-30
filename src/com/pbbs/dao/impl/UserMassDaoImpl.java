package com.pbbs.dao.impl;

import java.util.List;

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

	public List<UserMass> findByUserIdAndMassId(Integer userId,Integer massId) {
		return findList("from UserMass um where um.user.id = ?  and um.modul.mass.id = ? ", new Object[]{userId,massId});
	}

	public List<UserMass> findByUserIdAndMasss(Integer userId, String moduls) {
		return findList("from UserMass um where um.user.id = ?  and um.modul.id in ("+moduls+") " ,  new Object[]{userId});
	}
 
}
