package com.pbbs.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.BbsDao;
import com.pbbs.model.Bbs;
import com.pbbs.model.Visiablely;
import com.pbbs.service.BbsService;

/**
 * Bbs业务服务实现类
 */
@Service("BbsService")
@Transactional
public class BbsServiceImpl implements BbsService{
    
    
    @Autowired
    private BbsDao dao;//注入BbsDao

    @Transactional
    public void saveBbs(Bbs model) {
    	Date d= new Date();
    	
    	model.setPostTime(d);
    	model.setUpdateTime(d);
    	model.setViewNum(0);
    	model.setReplayNum(0);
    	model.setVeify("0");
    	model.setStatus(4);
    	
    	if(null==model.getVisiablely() || null==model.getVisiablely().getId()){
    		model.setVisiablely(new Visiablely(1));
    	}
    	
        dao.addBBs(model);
        
    }

    @Transactional(readOnly=true)
    public Bbs findBbsById(Integer id) {
        return dao.findById(id);
    }

    
    @Transactional
    public void updateBbs(Bbs model) {
//        dao.saveAndFlush(model);//(model);
    	dao.upBBs(model);
//        dao.flush();
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
