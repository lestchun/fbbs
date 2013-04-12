package com.pbbs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.MassDao;
import com.pbbs.model.Mass;

@Repository
public class MassDaoImpl extends BaseDao<Mass> implements MassDao {
	
	@Autowired
	public MassDaoImpl( EntityManagerFactory emf) {
		super(Mass.class, emf.createEntityManager());
	}

	public Page<Mass> listMass(Integer userId,Integer vify, Pageable page) {
		List<Object> param= new ArrayList<Object>();
		String  hql=" select m.mass from UserMass  m where m.user.id=?";
		if(null!=userId){
			param.add(userId);
			if(null!=vify){
				hql+="  and m.verify=?";
				param.add(vify);
			}
			return findByHQL(hql, param, page);
		} 
		return findAll(page);
	}
	
}
