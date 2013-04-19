package com.pbbs.dao;

 
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.Reply;

/**
 * Bbs接口
 * @author lei
 */
 @NoRepositoryBean
public interface ReplyDao extends JpaRepository<Reply,Integer>{
	 
	 public Page<Reply> findReply(Reply reply,Pageable page) ;
	 
	 public void upReply(Reply reply);
	 
	 public void addReply(Reply reply);
}
