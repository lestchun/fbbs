package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.MassDao;
import com.pbbs.model.Mass;
import com.pbbs.model.User;
import com.pbbs.service.MassService;

/**
 * Mass业务服务实现类
 */
@Service("MassService")
@Transactional
public class MassServiceImpl implements MassService{
    @Autowired
    private MassDao dao;//注入MassDao

    @Transactional
    public void saveMass(Mass model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Mass findMassById(Integer id) {
        return dao.findOne(id);
    }
    
    @Transactional
    public void updateMass(Mass model) {
        dao.save(model);
    }

    @Transactional
    public void deleteMassById(Integer id) {
        dao.delete(id);
    }
    @Transactional(readOnly=true)
	public Page<Mass> ListMass(User user,Integer vify, Pageable page) {
		return dao.listMass((null==user||null==user.getId())?null:user.getId(), vify, page);
	}
}
