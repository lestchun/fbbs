package com.pbbs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.ModulDao;
import com.pbbs.model.Modul;
import com.pbbs.service.ModulService;

/**
 * Modul业务服务实现类
 */
@Service("ModulService")
public class ModulServiceImpl implements ModulService{
    
    
    @Autowired
    private ModulDao dao;//注入ModulDao

    @Transactional
    public void saveModul(Modul model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Modul findModulById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional
    public void updateModul(Modul model) {
        dao.save(model);
    }

    @Transactional
    public void deleteModulById(Integer id) {
        dao.delete(id);
    }
    
    
}