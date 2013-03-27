package com.pbbs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.UserMass;

/**
 * UserMass接口
 * @author lei
 */
 @NoRepositoryBean
public interface UserMassDao extends JpaRepository<UserMass,Integer>{
/*${start}${content}${end}*/
}