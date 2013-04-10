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
  /**
   * 判断帖子或者 社团模块的可见性
   * @param vid   	可见性编号
   * @param userId	用户编号
   * @param type	是模块还是帖子  1 模块  2 帖子
   * @param mbid	模块或者帖子编号
   * @return
   */
  public boolean judgePower(Integer vid,Integer userId,Integer type ,Integer mbid);
  
}