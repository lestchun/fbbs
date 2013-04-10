package com.pbbs.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Message;

/**
 * Message接口
 * @author lei
 */
 @NoRepositoryBean
public interface MessageDao extends JpaRepository<Message,Integer>{
	 public Page<Message> search(Message message,Pageable page);
/*${start}${content}${end}*/
}