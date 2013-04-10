package com.pbbs.dao.impl;

 
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.UserMassDao;
import com.pbbs.model.UserMass;

@Repository
public  class UserMassDaoImpl extends BaseDao<UserMass> implements UserMassDao {
	
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
 

	public Page<UserMass> findByUserAndStatuc(UserMass model,Pageable page) {
		String hql="from UserMass m where 1=1 ";
		List<Object> param= new ArrayList<Object>();
		if(null!=model){
			if(null!=model.getVerify()){
				hql+= " and m.verify = ? ";
				param.add(model.getVerify());
			}
			if(null!=model.getUser()&&null!=model.getUser().getId()){
				hql+= " and m.user.id=? ";
				param.add(model.getUser().getId());
			}
		}
		return findByHQL(hql, param, page);
	}
 
}
