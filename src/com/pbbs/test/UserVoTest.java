package com.pbbs.test;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Transient;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.BbsDao;
import com.pbbs.dao.UserDao;
import com.pbbs.model.Bbs;
import com.pbbs.model.Reply;
import com.pbbs.model.User;
import com.pbbs.service.ReplyService;
import com.pbbs.service.UserService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/applicationContext.xml"}) 
public class UserVoTest {
    @Autowired UserDao dao;
    @Test
    public void testPage(){
    	System.out.println(dao.listWelUserVO(0,null,new PageRequest(1, 20)).getContent().get(0).getReply());
    }
    
  
    
    @Autowired BbsDao bdao;
    @Test
    public void testBBs(){
    	Bbs b= bdao.findOne(1);
    	System.out.println(b.getSubCon());
    }
    
    @Autowired ReplyService rservice;
    @Test
    @Transactional(readOnly=false)
    public void testReply(){
    	Bbs b= new Bbs(1);
    	Reply r= new Reply();
    	User u= new User(2);
    	r.setBbs(b);
    	r.setUser(u);
    	r.setContent("好吧！！！！！");
    	r.setRegiestTime(new Timestamp(System.currentTimeMillis()));
    	rservice.save(r,null);
    }
    
    @Autowired UserService service;
    @Test
    public void testAdd(){
    	User u =new User("aaa", "bbb", "12323", "sdasda", "2","0");
    	u.setStartTime(new Date());
    	u.setRegiestTime(new Date());
    	service.av(u);
    	
    }
    
    @Test
    public void testFind(){
    	Reply r= new Reply();
    	Bbs bbs= new Bbs(1);
    	r.setBbs(bbs);
    	System.out.println(rservice.findReply(r	,new PageRequest(1, 20)));
    }
}    
