package com.pbbs.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.User;

 

/**
 * User接口
 * @author lei
 */
 @NoRepositoryBean
public interface UserDao extends JpaRepository<User,Integer>{
	 public User findByUsernameAndPassword(User user);
	 
	 public List<User> findByUserName(String userName); 
	 
	 public Page<User> listWelUser(Pageable page);
	 
	 public User findByUserIdAndUsername(User user);
	 /*${start}${content}${end}*/
}