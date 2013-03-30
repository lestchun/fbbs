package com.pbbs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.BbsDao;
import com.pbbs.model.Bbs;

@Repository
public class BbsDaoImpl extends BaseDao<Bbs> implements BbsDao {
	
	@Autowired
	public BbsDaoImpl( EntityManagerFactory emf) {
		super(Bbs.class, emf.createEntityManager());
	}

	public Page<Bbs> findBbsByModul(Integer modulId, Integer veify,Pageable page) {
		String hql="from Bbs b where b.modul.id =? ";
		List<Object> param= new ArrayList<Object>();
		param.add(modulId);
		if(null!= veify){
			hql+=" and b.veify=? ";
			param.add(veify);
		}
		hql+="  order by b.status asc ,b.updateTime desc , b.replayNum desc ";
		return findByHQL(hql, param,page);
	}
	
}
