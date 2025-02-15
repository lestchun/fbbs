package com.pbbs.dao.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import com.pbbs.tool.PageModel;

public class BaseDao<T> extends SimpleJpaRepository<T, Integer>{
	
	public BaseDao(Class<T> domainClass, EntityManager em) {
		super(domainClass, em);
		this.em=em;
	}
	protected  EntityManager em;
	
	public Page<T> findByHQL(String hql,Pageable page){
		return findByHQL(hql,new HashMap<String,Object>(),page);
	}
	
	@SuppressWarnings("unchecked")
	public Page<T> findByHQL(String hql,Map<String, Object> param , Pageable page){
		if(null!=page&&null!=page.getSort()&&null!=page.getSort().iterator()){
			Iterator<Order> lo=page.getSort() .iterator();
			StringBuilder sb= new StringBuilder();
			
			while(lo.hasNext()){
				Order o=lo.next();
				sb.append(",");
				sb.append(o.getProperty());
				sb.append(" ");
				sb.append(o.getDirection());
			}
			
			if(sb.length()>0){
				sb.deleteCharAt(0);
				hql+=" order by "+sb.toString();
			}
		}
		
		Query query=em.createQuery(hql);
		Query count=em.createQuery(hql.replaceFirst("^[^(]*(?=(from)|(FROM))", "select count(*) "));
		
		if(null!=param){
			Set<String> keys= param.keySet();
			for(String key : keys){
				query.setParameter(key, param.get(key));
				count.setParameter(key, param.get(key));
			}
		}
		
		Page<T> pa= new PageModel<T>(
				query.setFirstResult(page.getOffset()-page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),
				((Long)count.getSingleResult()).intValue(),page.getPageNumber()+1
		);
		return pa;
	}
	
	@SuppressWarnings("unchecked")
	public T findOne(String hql,List<Object> param){
		Query query=em.createQuery(hql);
		if(null!=param){
			for(int i=0;i<param.size();i++){
				query.setParameter(i+1, param.get(i));
			}
		}
		return (T)query.getSingleResult();
	}
	
	@SuppressWarnings("unchecked")
	public T findOne(String hql,Object [] param){
		Query query=em.createQuery(hql);
		if(null!=param){
			for(int i=0;i<param.length;i++){
				query.setParameter(i+1, param[i]);
			}
		}
		return (T)query.getSingleResult();
	}
	
	@SuppressWarnings("unchecked")
	public List<T> findList(String hql,Object [] param){
		Query query=em.createQuery(hql);
		if(null!=param){
			for(int i=0;i<param.length;i++){
				query.setParameter(i+1, param[i]);
			}
		}
		return (List<T>) query.getResultList();
	}
	
	public static void main(String[] args) {
		StringBuilder sb= new StringBuilder();
		sb.append(".12");
		sb.deleteCharAt(0);
		System.out.println(sb);
	}
			
	@SuppressWarnings("unchecked")
	public Page<T> findByHQL(String hql,List<Object> param , Pageable page){
		if(null!=page&&null!=page.getSort()&&null!=page.getSort().iterator()){
			Iterator<Order> lo= page.getSort().iterator();
			StringBuilder sb= new StringBuilder();
			
			while(lo.hasNext()){
				Order o=lo.next();
				sb.append(",");
				sb.append(o.getProperty());
				sb.append(" ");
				sb.append(o.getDirection());
			}
			
			
			if(sb.length()>0){
				sb.deleteCharAt(0);
				hql+=" order by "+sb.toString();
			}
		}
		
		Query query=em.createQuery(hql);
		
		
		Query count=em.createQuery(hql.replaceFirst("^[^(]*(?=(from)|(FROM))", "select count(*) "));
		
		if(null!=param){
			for(int i=0;i<param.size();i++){
				query.setParameter(i+1, param.get(i));
				count.setParameter(i+1, param.get(i));
			}
		}
		
		Page<T> pa= new PageModel<T>(
				query.setFirstResult((page.getPageNumber()-1)*page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),
				((Long)count.getSingleResult()).intValue(),page.getPageNumber()
				);
		
		return pa;
	}
	
	public void delete(Class<?> clazz,Object id){
		 Object obj=em.getReference(clazz, id);
		 em.getTransaction().begin();
		 em.remove(obj);
		 em.getTransaction().commit();
	}
}

