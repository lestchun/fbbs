package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbbs.model.Message;

/**
 * Message接口
 * @author lei
 */
public interface MessageDao extends JpaRepository<Message,Integer>{
}