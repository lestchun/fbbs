package com.pbbs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.BbsDao;
import com.pbbs.model.Bbs;

@Repository
@Scope("prototype")
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
			param.add(veify+"");
		}
		hql+="  order by b.status asc ,b.updateTime desc , b.replayNum desc ";
		return findByHQL(hql, param,page);
	}
	
	
	/**
	 * bbs.id  1 显示社团帖子  2.显示部门帖子
	 * bbs.viewNum  对应id
	 */
	public Page<Bbs> findBbsByUser(Bbs bbs, Pageable page) {
		String hql=" from Bbs b where 1=1";
		List<Object>param= new ArrayList<Object>();
		if(null!=bbs){
			if(null!=bbs.getUser()&&null!=bbs.getUser().getId()){
				hql+=" and b.user.id=?";
				param.add(bbs.getUser().getId());
			}
			
			if(null!=bbs.getVeify()){
				hql+=" and b.veify=?";
				param.add(bbs.getVeify());
			}
			
			if(null!=bbs.getStatus()&&0!=bbs.getStatus()){
				hql+=" and b.status = ?";
				param.add(bbs.getStatus());
			}
			
			if(null!=bbs.getId()){
				if(1==bbs.getId()){
					hql+=" and b.modul.mass.id=?";
					param.add(bbs.getViewNum());
				}else if(2==bbs.getId()){
					hql+=" and b.modul.id=?";
					param.add(bbs.getViewNum());
				}
			}
			
		}
		return findByHQL(hql,param, page);
	}

	public synchronized void upBBs (Bbs bbs) {
		em.getTransaction().begin();
		em.clear();
		em.merge(bbs);
		em.getTransaction().commit();
	}

	public void addBBs(Bbs bbs) {
		em.getTransaction().begin();
		em.persist(bbs);
		em.getTransaction().commit();
	}

	public Bbs findById(Integer id) {
		em.clear();
		return em.getReference(Bbs.class,id	);
	}



}
