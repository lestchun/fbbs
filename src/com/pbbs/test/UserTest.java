package com.pbbs.test;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.MassDao;
import com.pbbs.dao.UserDao;
import com.pbbs.model.Mass;
import com.pbbs.model.User;
import com.pbbs.service.UserService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/applicationContext.xml"}) 
public class UserTest {
    @Autowired MassDao dao;
    @Test
    public void testPage(){
    	
    	Mass ma= new Mass();
    	User u= new User();
    	u.setId(1);
    	
    	
    }
    @Autowired UserService userdao;
    @Test
    public void insertUser(){
    	List<User> list= new ArrayList<User>();
    	for(int i=0;i<10;i++){
	    	User user= new User();
	    	user.setGrade("09计科一班");
	    	user.setNickname("雷xx"+i);
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

}