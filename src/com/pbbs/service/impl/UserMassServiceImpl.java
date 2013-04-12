package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.UserMassDao;
import com.pbbs.model.UserMass;
import com.pbbs.service.UserMassService;

/**
 * UserMass业务服务实现类
 */
@Service("UserMassService")
@Transactional
public class UserMassServiceImpl implements UserMassService{
    
    
    @Autowired
    private UserMassDao dao;//注入UserMassDao

    @Transactional(readOnly=false)
    public void saveUserMass(UserMass model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public UserMass findUserMassById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional(readOnly=false)
    public void updateUserMass(UserMass model) {
        dao.save(model);
    }

    @Transactional(readOnly=false)
    public void deleteUserMassById(Integer id) {
        dao.delete(id);
    }
    @Transactional(readOnly=true)
	public Page<UserMass> findUserMassByUserAndVef(UserMass model, Pageable page) {
		return dao.findByUserAndStatuc(model, page);
	}
    
    
}