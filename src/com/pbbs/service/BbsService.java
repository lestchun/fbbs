package com.pbbs.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.Bbs;

/**
 * 用户业务接口
 */
public interface BbsService {
    
    /**
     * 保存Bbs
     * @param Bbs
     */
  public  void saveBbs(Bbs model);
    
    /**
     * 根据id查找Bbs
     * @param id
     * @return
     */
   public Bbs findBbsById(Integer id);
    
    /**
     * 更新Bbs
     * @param Bbs
     */
  public  void updateBbs(Bbs model);
    
    /**
     * 根据ID删除Bbs
     * @param id
     */
  public  void deleteBbsById(Integer id);
  /**
   * 找出指定模块下的帖子
   * @param modulId
   * @param veify
   * @param page
   * @return
   */
  public Page<Bbs> findBbsByModul(Integer modulId, Integer veify,Pageable page) ;
 
  /**
   * 列出所有帖子
   * @param page
   * @return
   */
  public Page<Bbs> find(Pageable page);
  /**
   * 列出用户发表的帖子
   * @param bbs
   * @param page
   * @return
   */
  public Page<Bbs> findBbsByUser(Bbs bbs, Pageable page);
}
