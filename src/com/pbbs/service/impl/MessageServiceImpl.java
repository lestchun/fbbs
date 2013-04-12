package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.MessageDao;
import com.pbbs.model.Message;
import com.pbbs.service.MessageService;

/**
 * Message业务服务实现类
 */
@Service("MessageService")
@Transactional
public class MessageServiceImpl implements MessageService{
    
    
    @Autowired
    private MessageDao dao;//注入MessageDao

    @Transactional
    public void saveMessage(Message model) {
        dao.save(model);
    }

	public Page<Message> searchMessage(Message mess, Pageable page) {
		return dao.search(mess, page);
	}
    
    
}