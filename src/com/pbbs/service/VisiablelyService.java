package com.pbbs.service;

import com.pbbs.model.Visiablely;

/**
 * 用户业务接口
 */
public interface VisiablelyService {
    
    /**
     * 保存Visiablely
     * @param Visiablely
     */
  public  void saveVisiablely(Visiablely model);
    
    /**
     * 根据id查找Visiablely
     * @param id
     * @return
     */
   public Visiablely findVisiablelyById(Integer id);
    
    /**
     * 更新Visiablely
     * @param Visiablely
     */
  public  void updateVisiablely(Visiablely model);
    
    /**
     * 根据ID删除Visiablely
     * @param id
     */
  public  void deleteVisiablelyById(Integer id);
    
}