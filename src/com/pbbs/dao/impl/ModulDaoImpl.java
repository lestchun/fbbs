package com.pbbs.dao.impl;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.ModulDao;
import com.pbbs.model.Modul;
import com.pbbs.tool.PageModel;

@Repository
public class ModulDaoImpl extends BaseDao<Modul> implements ModulDao {
	
	@Autowired
	public ModulDaoImpl( EntityManagerFactory emf) {
		super(Modul.class, emf.createEntityManager());
	}

	@SuppressWarnings("unchecked")
	public Page<Modul> modulRank(String id, Pageable page) {
		String sql="SELECT m.* FROM   modul m LEFT JOIN ( SELECT um.mid  mids ,COUNT(1) cc  FROM usermass um GROUP BY um.mid ) c ON(c.mids=m.id) WHERE m.mid="+id+" ORDER BY c.cc desc";
		Query query=em.createNativeQuery(sql, Modul.class);
		Page<Modul> pa= new PageModel<Modul>(query.setFirstResult(page.getOffset()-page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),100,1);
		return pa;
	}

	
	public List<Modul> listModulByUser(Integer mass, Integer uid) {
		
		 String sql="select m from Modul m where m.id not in (select u.modul.id  from UserMass u where u.modul.mass.id=? and u.user.id !=?) and m.mass.id = ?";
		return findList(sql,new Object[]{mass,uid,mass});
	}
	
}
