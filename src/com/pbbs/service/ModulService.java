package com.pbbs.service;

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
}