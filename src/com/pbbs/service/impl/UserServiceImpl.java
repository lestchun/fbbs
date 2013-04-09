package com.pbbs.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.UserDao;
import com.pbbs.model.User;
import com.pbbs.service.UserService;

/**
 * User业务服务实现类
 */
@Service("UserService")
@Transactional
public class UserServiceImpl implements UserService{
    
    
    @Autowired
    private UserDao dao;//注入UserDao

    public void saveUser(User model) {
        dao.save(model);
        
    }
    public void saveUser(List<User> model) {
    	dao.save(model);
    	
    }

    public User findUserById(Integer id) {
        return dao.findOne(id);
    }

    
    public void updateUser(User model) {
        dao.save(model);
    }

    public void deleteUserById(Integer id) {
        dao.delete(id);
    }
	public User findUserByUserNameAndUserName(User user) {
		return dao.findByUserIdAndUsername(user);
	}
    
    
}