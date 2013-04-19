package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.ReplyDao;
import com.pbbs.model.Reply;

@Repository
public class ReplyDaoImpl extends BaseDao<Reply> implements ReplyDao {
	
	@Autowired
	public ReplyDaoImpl( EntityManagerFactory emf) {
		super(Reply.class, emf.createEntityManager());
	}

	public void upReply(Reply reply) {
		em.getTransaction().begin();
		em.merge(reply);
		em.getTransaction().commit();
		
	}


	public void addReply(Reply reply) {
		em.getTransaction().begin();
		em.persist(reply);
		em.getTransaction().commit();
	}

	public Page<Reply> findReply(Reply reply, Pageable page) {
		String hql="from Reply r where r.bbs.id="+reply.getBbs().getId();
		System.out.println(hql);
		return findByHQL(hql, page);
	}



}
