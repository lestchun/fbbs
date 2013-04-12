package com.pbbs.test;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pbbs.dao.MassDao;
import com.pbbs.model.User;
import com.pbbs.service.UserService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/applicationContext.xml"}) 
public class UserTest {
    @Autowired MassDao dao;
    @Test
    public void testPage(){
    	
//    	Mass ma= new Mass();
    	User u= new User();
    	u.setId(1);
    	
    	
    }
    @Autowired UserService userdao;
    @Test
    public void insertUser(){
    	List<User> list= new ArrayList<User>();
    	for(int i=0;i<1;i++){
	    	User user= new User();
	    	user.setGrade("09计科一班");
	    	user.setNickname("黎xx"+i);
	    	user.setUsername("leixx"+i);
	    	user.setPassword("1234");
	    	user.setRegiestTime(new Timestamp(System.currentTimeMillis()));
	    	user.setStatus("1");
	    	user.setStartTime(new Timestamp(System.currentTimeMillis()));
	    	list.add(user);
    	}
    	userdao.saveUser(list);
    	System.out.println("save it ");
    }
    @Test
    public void testDelete(){
    	userdao.deleteUserById(18);
    }
    
    @Test
    public void testCalc(){
    	System.out.println(userdao.listWelUser(new PageRequest(1, 20)));
    }
}