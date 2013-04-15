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


	public Page<Message> searchMessage(Message mess, Pageable page) {
		return dao.search(mess, page);
	}
 

    @Transactional
    public void saveMessage(Message model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Message findMessageById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional
    public void updateMessage(Message model) {
        dao.save(model);
    }

    @Transactional
    public void deleteMessageById(Integer id) {
        dao.delete(id);
    }
    
    
}
