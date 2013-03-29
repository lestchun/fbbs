package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.VisiablelyDao;
import com.pbbs.model.Visiablely;
import com.pbbs.service.VisiablelyService;

/**
 * Visiablely业务服务实现类
 */
@Service("VisiablelyService")
public class VisiablelyServiceImpl implements VisiablelyService{
    
    
    @Autowired
    private VisiablelyDao dao;//注入VisiablelyDao

    @Transactional
    public void saveVisiablely(Visiablely model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Visiablely findVisiablelyById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional
    public void updateVisiablely(Visiablely model) {
        dao.save(model);
    }

    @Transactional
    public void deleteVisiablelyById(Integer id) {
        dao.delete(id);
    }
}