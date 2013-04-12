package com.pbbs.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.Message;

/**
 * 用户业务接口
 */
public interface MessageService {
    
    /**
     * 保存Message
     * @param Message
     */
  public  void saveMessage(Message model);
 
  /**
   * 查找信息
   * @param mess
   * @param page
   * @return
   */
  public Page<Message> searchMessage(Message mess,Pageable page);
}