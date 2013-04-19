package com.pbbs.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.Reply;
import com.pbbs.model.User;

public interface ReplyService {
	public void save(Reply reply,User u);
	public Page<Reply> findReply(Reply reply,Pageable page) ;
}
