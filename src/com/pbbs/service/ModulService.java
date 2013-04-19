package com.pbbs.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.Modul;

/**
 * 用户业务接口
 */
public interface ModulService {
    
    /**
     * 保存Modul
     * @param Modul
     */
  public  void saveModul(Modul model);
    
    /**
     * 根据id查找Modul
     * @param id
     * @return
     */
   public Modul findModulById(Integer id);
    
    /**
     * 更新Modul
     * @param Modul
     */
  public  void updateModul(Modul model);
    
    /**
     * 根据ID删除Modul
     * @param id
     */
  public  void deleteModulById(Integer id);
  /**
   * 部门排行
   * @param id
   * @param page
   * @return
   */
  public Page<Modul> modulRank(String id,Pageable page);
  
  public List<Modul> listModulByUser(Integer mass,Integer uid); 
  
}