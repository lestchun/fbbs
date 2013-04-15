package com.pbbs.service.impl;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.MessageDao;
import com.pbbs.dao.UserDao;
import com.pbbs.model.Message;
import com.pbbs.model.User;
import com.pbbs.service.UserService;
import com.pbbs.tool.DateUtil;

/**
 * User业务服务实现类
 */
@Service("UserService")
@Transactional
public class UserServiceImpl implements UserService{
    
    
    @Autowired UserDao dao;//注入UserDao
    @Autowired MessageDao messDao; 
    @Modifying
    @Transactional    
	public void saveUser(User model) {
		
		Timestamp sys=new Timestamp(System.currentTimeMillis());
    	model.setRegiestTime(sys);
		model.setStartTime(sys);
		model.setStatus("0");
		model.setType("1");
		Message m= new Message();
		
		m.setMsg("用户"+model.getUsername()+"在"+DateUtil.formatter(new Date())+"注册成功");
		m.setSendTime(sys);
		
		dao.save(model);
		messDao.save(m);
		
        
    }
    @Transactional
    public void saveUser(List<User> model) {
    	dao.save(model);
    	
    }
    @Transactional(readOnly=true)
    public User findUserById(Integer id) {
        return dao.findOne(id);
    }

    @Transactional
    public void updateUser(User model) {
        dao.save(model);
    }
    @Transactional(readOnly=false)
    public void deleteUserById(Integer id) {
        dao.delete(id);
//        dao.deleteAll();
    }
    @Transactional(readOnly=true)
	public User findUserByUserNameAndPassword(User user) {
		return dao.findByUsernameAndPassword(user);
	}
    @Transactional(readOnly=true)
	public boolean judgeUserExtis(String userName) {
		List<User> l=dao.findByUserName(userName);
		return !(null==l||0==l.size());
	}
	public Page<User> listWelUser(Pageable page) {
		return dao.listWelUser(page);
    }
	public User findUserByUserNameAndUserName(User user) {
		return dao.findByUserIdAndUsername(user);
	}
    
    
}
