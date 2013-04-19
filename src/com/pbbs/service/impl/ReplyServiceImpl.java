package com.pbbs.service.impl;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.BbsDao;
import com.pbbs.dao.MessageDao;
import com.pbbs.dao.ReplyDao;
import com.pbbs.model.Bbs;
import com.pbbs.model.Message;
import com.pbbs.model.Reply;
import com.pbbs.model.User;
import com.pbbs.service.ReplyService;

@Service("ReplyServiceImpl")
@Transactional
public class ReplyServiceImpl implements ReplyService{
	
	@Autowired ReplyDao dao;
	@Autowired MessageDao mdao;
	@Autowired BbsDao bdao;
	/**
	 * 回复操作
	 * 1.添加消息
	 * 2.修改帖子回复数
	 */
	public void save(Reply reply,User u) {
		reply.setRegiestTime(new Date());
		dao.addReply(reply);
		
		Message m= new Message();
		m.setMsg("用户"+u.getNickname()+"评论帖子"+reply.getBbs().getTitle());
		m.setRevicesUser(""+u.getId());
		m.setSendTime(new Timestamp(System.currentTimeMillis()));
		
		Bbs bbs=bdao.findById(reply.getId());
		Integer r=bbs.getReplayNum();
		r=r==null?1:r+1;
		bbs.setReplayNum(r);
		bdao.upBBs(bbs);
		mdao.saveMessage(m);
		
	}
	public Page<Reply> findReply(Reply reply, Pageable page) {
		return dao.findReply(reply, page);
	}

}
