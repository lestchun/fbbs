package com.pbbs.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.pbbs.model.UserMass;

/**
 * UserMass接口
 * @author lei
 */
 @NoRepositoryBean
public interface UserMassDao extends JpaRepository<UserMass,Integer>{
	 public List<UserMass> findByUserIdAndMassId(Integer userId,Integer massId);
	 public List<UserMass> findByUserIdAndMasss(Integer userId,String moduls);
 
	 public Page<UserMass> findByUserAndStatuc(UserMass model,Pageable page);
}
