package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.User;

/**
 * User接口
 * @author lei
 */
 @NoRepositoryBean
public interface UserDao extends JpaRepository<User,Integer>{
/*${start}${content}${end}*/
}