package com.pbbs.dao.impl;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pbbs.dao.MessageDao;
import com.pbbs.model.Message;

@Repository
public class MessageDaoImpl extends BaseDao<Message> implements MessageDao {
	
	@Autowired
	public MessageDaoImpl( EntityManagerFactory emf) {
		super(Message.class, emf.createEntityManager());
	}
	
}
