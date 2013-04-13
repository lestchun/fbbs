package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Message;

/**
 * Message接口
 * @author lei
 */
 @NoRepositoryBean
public interface MessageDao extends JpaRepository<Message,Integer>{
/*${start}${content}${end}*/
}