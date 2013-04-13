package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.BbsDao;
import com.pbbs.model.Bbs;
import com.pbbs.service.BbsService;

/**
 * Bbs业务服务实现类
 */
@Service("BbsService")
public class BbsServiceImpl implements BbsService{
    
    
    @Autowired
    private BbsDao dao;//注入BbsDao

    @Transactional
    public void saveBbs(Bbs model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Bbs findBbsById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional
    public void updateBbs(Bbs model) {
        dao.save(model);
    }

    @Transactional
    public void deleteBbsById(Integer id) {
        dao.delete(id);
    }

	public Page<Bbs> findBbsByModul(Integer modulId, Integer veify,
			Pageable page) {
		return dao.findBbsByModul(modulId, veify, page);
	}

	public Page<Bbs> find(Pageable page) {
		return dao.findAll(page);
	}

	public Page<Bbs> findBbsByUser(Bbs bbs, Pageable page) {
		return dao.findBbsByUser(bbs, page);
	}
 
    
}
