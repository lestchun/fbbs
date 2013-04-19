package com.pbbs.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.ModulDao;
import com.pbbs.model.Modul;
import com.pbbs.service.ModulService;

/**
 * Modul业务服务实现类
 */
@Service("ModulService")
@Transactional
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
    public void deleteModulById(Integer id) {
        dao.delete(id);
    }

	public Page<Modul> modulRank(String id, Pageable page) {
		
		return dao.modulRank(id, page);
	}

	public void updateModul(Modul model) {
		
	}

	public List<Modul> listModulByUser(Integer mass, Integer uid) {
		return dao.listModulByUser(mass,uid);
	}
}
