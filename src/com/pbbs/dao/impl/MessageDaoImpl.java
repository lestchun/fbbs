package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.MessageDao;
import com.pbbs.model.Message;

@Repository
public class MessageDaoImpl extends BaseDao<Message> implements MessageDao {
	
	@Autowired
	public MessageDaoImpl( EntityManagerFactory emf) {
		super(Message.class, emf.createEntityManager());
	}

	public Page<Message> search(Message message, Pageable page) {
		String hql="from Message m where 1=1 ";
		if(null==message){
			hql+=" and m.revicesUser is null ";
		}
		hql+=" order by m.sendTime desc ";
		return findByHQL(hql, page);
	}

	public void saveMessage(Message mess) {
		em.getTransaction().begin();
		em.persist(mess);
		em.getTransaction().commit();
	}
	
}
