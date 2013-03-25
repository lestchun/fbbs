package com.pbbs.dao.impl;

import java.util.Map;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import com.pbbs.tool.PageModel;

public class BaseDao<T> extends SimpleJpaRepository<T, Integer>{
	
	public BaseDao(Class<T> domainClass, EntityManager em) {
		super(domainClass, em);
		this.em=em;
	}
	protected  EntityManager em;
	
	public Page<T> findByHQL(String hql,Pageable page){
		return findByHQL(hql,null,page);
	}
	
	@SuppressWarnings("unchecked")
	public Page<T> findByHQL(String hql,Map<String, Object> param , Pageable page){
		Query query=em.createQuery(hql);
		Query count=em.createQuery("select count(1) from ( "+hql+" )");
		
		if(null!=param){
			Set<String> keys= param.keySet();
			for(String key : keys){
				query.setParameter(key, param.get(key));
				count.setParameter(key, param.get(key));
			}
		}
		
		Page<T> pa= new PageModel<T>(
				query.setFirstResult(page.getOffset()-page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),
				(Integer)count.getSingleResult(),page.getPageNumber()
		);
		
		return pa;
	}
 
}


